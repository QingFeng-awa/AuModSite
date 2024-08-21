# 贡献指南
## 您在Pr时应当……
- 使用简体中文/English作为commit信息
- 使用简洁易懂的Pr标题
- (可选的,但推荐)用几句话描述一下您的Pr是干什么的。
  - 如果您真的 ~~懒~~ 不想写说明,您也可以直接贴几段关键的代码。
  - 你要是不写也可以,你猜我会不会看你的代码然后合并。
## 如果在您的PC上启动一个本网站的开发服务器
您应当在发起拉取请求前用`npm run build`看看能不能正常构建。<br>
如果因为您的Pr导致CloudFlare Pages自动构建失败,~~我真的会谢~~我很大可能会立即回退并且在接下来的几个月不接受您的Pr。<br>
因此,在您的PC上启动开发服务器以预览更改是很有必要的。

> 教程全部假设您的计算机使用的是Windows 11,并且是一个全新的环境,没有安装任何Web开发用的依赖/工具。

1. 安装git<br>
   在[git for Windows的GitHub仓库](https://github.com/git-for-windows/git/releases)下载最新版本的git。<br>
   下载后自行根据安装向导安装。
3. 安装node.js<br>
   在[node.js官方网站](https://nodejs.org/zh-cn)下载最新版本的node.js。<br>
   随后跟随安装程序就可以完成安装了。
4. 更新npm<br>
   在安装node.js如果你没有更改任何设置,那么node.js在安装时会附带一个并非最新版本的npm。<br>
   在任意位置打开CMD,输入下方命令:
   ```
   npm -g install npm@10.8.2
   ```
   > 这个命令会更新到与网站使用一样的版本,这不一定是最新版本。
6. 更新node.js<br>
   还是在CMD,依次执行如下命令。
   ```bash
   npm install -g n
   n v22.6.0
   ```
