# 运维

双平台对于环境的共同需求：`MySQL`, `Node.js`，如果没有安装请先自行搜索教程安装

下列有 `Windows` 与 `Linux` 双端的部署操作  
可按照实际情况自行选择使用的系统：    
- `Windows`：操作难度小，但需要的服务器性能高  
- `Linux`：操作难度大，但需要的服务器性能低  

## 导入数据库

例：上文目录结构中 `scriptfiles` 下存在 `samp202110022151gbk.sql` 文件，用记事本软件打开可看到**默认创建的数据库名为** `samp` ，如果想修改则自行修改。  

进入 `mysql` 终端，执行命令 `source 你的服务器文件夹路径\scriptfiles\备份数据库文件名.sql`  

例：`source d:\rst\scriptfiles\samp202110022151gbk.sql;`

## Win

1. 删除为 `linux` 部署提供的文件，注意：注意文件后缀，例 `samp-npc` 是不带 `.exe` 的

- `samp-npc`
- `samp03svr`
- `announce`
- `log-core.so`
- `server_linux.cfg`
- `plugins\linux`

2. 移动 `plugins\win` 文件夹下所有文件到 `plugins` 下，之后删除 `plugins\win` 文件夹

3. 配置如下文件中以下几处数据库和邮箱系统的端口及密码。

    注：**如果不需要用到邮箱系统可以跳过以下的邮箱部分的步骤**，邮箱系统主要是实现用户绑定邮箱，找回密码等操作。

    ::: details `pawno\include\common\main.inc`
    ```c
    #define MYSQL_USER	"root" // 改成你的MYSQL用户名
    #define MYSQL_PASS 	"123456"// 改成你的MYSQL服务密码
    #define MYSQL_DB	"samp"// 改成你自己的数据库名
 
    #define SAMPMAILJS_PASSWORD "1234567"  // 改成你的邮箱系统密码（不是邮箱密码）
    ```
    :::

    ::: details `scriptfiles\SAMPMailJS-master\config.json`
    ```json
    {
        "machineIp": "127.0.0.1",
        "listenPort": 9008,
        "httpPassword": "1234567", // 改成你的邮箱系统密码，和上方1234567一样，并删除这行注释
        "enableDebug": true,
        "smtp": {
            "host": "smtp.163.com", // 修改为你的邮箱系统提供商smtp服务，并删除这行注释
            "port": 465, // 修改为你的邮箱系统提供商smtp服务的端口，并删除这行注释
            "secure": true,
            "auth": {
                "user": "username@163.com", // 修改为你的邮箱账号，并删除这行注释
                "pass": "passwd" // 修改为你的邮箱密码，并删除这行注释
            },
            "tls": {
                "rejectUnauthorized": false
            }
        }
    }
    ```
    :::

4. 重命名 `server_win.cfg` 为 `server.cfg`

5. 配置 `server.cfg` 中的 `rcon` 默认密码为你想要的密码，这里默认是 `changeme` ，**不修改无法启动服务器！**

    ```
    rcon_password changeme
    ```

6. 运行 `pawno\pawno.exe` ，编译 `gamemodes\racespeedtime.pwn` ，出现 `gamemodes\racespeedtime.amx` 即编译成功，如果编译有报错请自行根据提示修复问题

7. 运行 `samp-server.exe`

    - 如果提示数据库连接失败，请回到 3 重新配置数据库信息
 
    - 如果控制台出现 `Run time error 19: "File or function is not found"` ，请安装[Microsoft Visual C++2015](https://www.microsoft.com/zh-CN/download/details.aspx?id=48145)的 `x64` 和  `x86` 环境，或使用[DX修复工具增强版](https://blog.csdn.net/vbcom/article/details/7245186)进行完全补全。

    如果已经有环境请先全部卸载该环境后重新安装。

    - 如果正常进入服务器并见到注册登录对话框代表运行成功

8. 如果使用邮箱系统请通过终端，在`scriptfiles\SAMPMailJS-master`文件夹下（首次请先执行`npm install`）执行`node sampmail.js`

:::: warning 注意
由于 `MySQL` 的版本高低影响  
在运行 `samp-server.exe` 的过程中，可能会出现以下两行的报错提示：  

```cmd
[ERROR] #2019 'Can't initialize character set unknown (path: compiled_in)'
[MySQL]无法连接到MYSQL服务器
```

::: details 解决办法
1. 打开 `MySQL` 的配置目录 ==> `C:\ProgramData\MySQL\MySQL Server 8.0`  
2. 使用任意代码编辑器（如：`Notepad3`）对 `my.ini` 进行编辑：  
    在对应节中添加代码，并保存：  
    ```ini
    [client]
    default-character-set = utf8mb4

    [mysql]
    default-character-set = utf8mb4

    [mysqld]
    character-set-client-handshake = FALSE
    character-set-server = utf8mb4
    collation-server = utf8mb4_unicode_ci
    ```
3. 重启服务器或重启 `MySQL` 对应服务，重新运行 `samp-server.exe` 即可  
:::

::::

## Linux

**注意：Linux 下运行需要系统底层 GCC 版本>=8.2.0**

查看 `gcc` 版本 `gcc -v` ，如果低于 `8.2.0` 请先更新至 `8.2.0` 版本，**满足则跳过该步**。

**以下以 CentOS7 为例**

#### 升级 GCC 到 8.2.0

1. 安装依赖

```sh
yum -y install gcc gcc-c++ kernel-devel yum -y install libgcc.i686 glibc-devel.i686
wget http://mirror.hust.edu.cn/gnu/gcc/gcc-8.2.0/gcc-8.2.0.tar.gz tar xvf gcc-8.2.0.tar.gz
cd gcc-8.2.0 ./contrib/download_prerequisites
mkdir build cd build …/configure --enable-languages=c,c++ --enable-checking=release --enable-multilib
```

2. 根据 CPU 核数，例如 4 核，执行编译 `make -j4`

3. 安装 `make install`

4. 重启 `reboot`

5. 查看动态库版本 `strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX`

    `Centos7` 搭配 `GCC` 4.8.5，最新的 `GLIBCXX` 版本是 3.4.19

6. 查找 `libstdc++.so.6*` 库文件 `find / -name libstdc++.so.6*`
7. 软链接`glibc`库
    - 64 位
        - 把文件复制到 lib64 下 `cp /usr/local/lib64/libstdc++.so.6.0.25 /usr/lib64/libstdc++.so.6.0.25`
        - 进入 lib64 目录`cd /usr/lib64`
        - 删除旧的链接文件`rm -f libstdc++.so.6`
        - 创建新的链接文件`ln -s libstdc++.so.6.0.25 libstdc++.so.6`
    - 32 位
        - 把文件复制到 lib 下`cp /usr/local/lib/libstdc++.so.6.0.25 /usr/lib/libstdc++.so.6.0.25`
        - 进入 lib 目录`cd /usr/lib`
        - 删除旧的链接文件`rm -f libstdc++.so.6`
        - 创建新的链接文件`ln -s libstdc++.so.6.0.25 libstdc++.so.6`
        - 再次查看动态库版本 `strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX`，出现`3.4.25 GLIBCXX` 成功!

#### 部署

0. 安装必要环境后，运行时可能会出现`libmysqlclient.so.18`类似的提示，原因是缺少 i386,i686 的环境配置，比较耗费时间精力，尝试安装以下依赖或降低 `Mysql` 版本为 `5.7` 左右，再次安装。

    ```sh
    yum install mysql-community-libs
    yum install mysql-community-libs.i386
    yum install mysql-community-libs.i686
    ```

    ::: tip 提示
    如果使用的是Ubuntu或其他系统是无法使用上述指令的  
    推荐使用CentOS进行部署，否则将会非常麻烦  
    :::

    **mysql 修改默认字符集为 utf8mb4，以 CentOS 为例**

    打开 my.cnf，一般情况下载 `etc` 目录下

    ```bash
    vi /etc/my.cnf
    ```

    然后修改内容(只列出需要修改的地方)

    [mysqld]的修改如下

    ```bash
    [mysqld]
    character-set-server = utf8mb4
    collation-server = utf8mb4_unicode_ci
    ```

    [client]的修改如下

    ```bash
    [client]
    default-character-set = utf8mb4
    ```

    [mysql]的修改如下

    ```bash
    [mysql]
    default-character-set = utf8mb4
    ```

    然后保存退出、重启 mysqld 服务。

    ```bash
    systemctl restart mysqld
    ```

1. 提前在 Win 系统运行 `pawno\pawno.exe` ，编译 `gamemodes\racespeedtime.pwn` ，出现 `gamemodes\racespeedtime.amx` 即编译成功，如果编译有报错请自行根据提示修复问题，把编译后的文件上传至服务器

2. 删除为`Win`部署提供的文件

- `samp-npc.exe`
- `samp-server.exe`
- `announce.exe`
- `server_win.cfg`
- `libmariadb.dll`
- `log-core.dll`
- `plugins\win`

3. 移动 `plugins\linux` 文件夹下所有文件到 `plugins` 下，之后删除 `plugins\linux` 文件夹

4. 配置数据库邮箱文件同 `Win` 配置 3

5. 重命名 `server_linux.cfg` 为 `server.cfg`

6. 配置 `server.cfg` 中的 `rcon` 默认密码同 `Win` 配置 5

7. 通过 `screen` 实现退出 `ssh` 保持运行，`screen`教程请自行学习

   - 新建一个 `screen` 用于运行服务器, 进入文件夹下 `./autoRestart.sh &`
   - 如果提示数据库连接失败，请回到 4 重新配置数据库信息
   - 如果正常进入服务器并见到注册登录对话框代表运行成功

8. 如果使用邮箱系统请通过终端，再新建一个 `screen` 用于运行邮箱系统，进入对应 `scriptfiles\SAMPMailJS-master` 文件夹下，（首次请先执行 `npm install` ）执行 `node sampmail.js`
