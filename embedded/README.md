# Embedded

## 팀원

| 이름 | 역할 |
|-----|-------|
| 한성주 | 임베디드 팀장 |
| 서지수 | 임베디드 |


----

## Raspberry Pi 5 OS 설치
- Raspberry Pi 5 OS (64bit)
    1. **[Raspberry Pi Imager](https://www.raspberrypi.com/software/) 설치**
    2. SD 카드 FAT32로 포맷
    3. SD 카드에 Raspberry Pi 5 OS (64bit) 버전 설치
    4. 설치 전 커스텀 설정하기
        1. ssh (password 인증)
        2. wifi 설정
        3. hostname 지정
        4. 국가 선택 -> kr
   

## 기본 세팅

### 1. 고정 ip 설정 
 
``` bash
# 설정 파일 열기
$ sudo nano /etc/dhcpcd.conf
```


``` shell
# 고정 ip 설정
interface wlan0
static ip_address=192.168.xx.xxx
static routers=192.168.xx.1

# 가장 하단에 작성 후 ctrl+O 로 저장 후 ctrl+x 로 나가기
```

### 2. PM2

``` bash
# pm2 설치
$ sudo npm install pm2@latest -g
```


``` bash
# pm2 시작하기
$ pm2 start app.js
```

- Cheat Sheet
```bash
# Fork mode
pm2 start app.js --name my-api # Name process

pm2 monit              # Monitor all processes

# Logs
pm2 logs [--raw]       # Display all processes logs in streaming
pm2 flush              # Empty all log files
pm2 reloadLogs         # Reload all logs

# Actions
pm2 stop all           # Stop all processes
pm2 restart all        # Restart all processes
pm2 reload all         # Will 0s downtime reload (for NETWORKED apps)
pm2 stop 0             # Stop specific process id
pm2 restart 0          # Restart specific process id
pm2 delete 0           # Will remove process from pm2 list
pm2 delete all         # Will remove all processes from pm2 list

```

### 3. Node.js 설치

- 라즈베리파이 패키지 버전 확인

```bash
$ apt list | grep nodejs
```

- node.js 패키지 저장소를 최신 버전으로 지정

```bash
$ sudo curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -$ apt list | grep nodejs
```

- node.js 설치

```bash 
$ sudo apt-get install nodejs
```

### 4. MagicMirror2 설치 및 실행

- MagicMirror2 clone
```bash
$ git clone https://github.com/MagicMirrorOrg/MagicMirror
```

- Enter the repository: `cd MagicMirror/`
- Install the application: `sudo npm run install-mm`
- Make a copy of the config sample file: `cp config/config.js.sample config/config.js`
- Start the application: `npm run start`