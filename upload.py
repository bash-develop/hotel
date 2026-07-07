import ftplib, os

out = "/Users/bash-dev-osx/hotel/out"
ftp = ftplib.FTP("492dce03a885.hosting.myjino.ru", "j18944597", "Dtt2536788")
ftp.set_pasv(True)
ftp.cwd("domains/otelsofia.ru")

def up(local, remote):
    ftp.cwd(remote)
    for name in os.listdir(local):
        p = os.path.join(local, name)
        if os.path.isfile(p) and not name.startswith("."):
            with open(p, 'rb') as f:
                ftp.storbinary(f'STOR {name}', f)
            print(f"OK {name}")
        elif os.path.isdir(p) and not name.startswith("."):
            try: ftp.mkd(name)
            except: pass
            up(p, name)
            ftp.cwd('..')

up(out, '.')
print("DONE")
ftp.quit()
