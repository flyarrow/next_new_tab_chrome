# next_new_tab_chrome
Chrome插件：自动将新打开的标签页排在当前标签页的后面

# 标签页整理器 Chrome插件

这是一个Chrome浏览器插件，可以自动将新打开的标签页排在当前标签页的后面。

## 功能

- 当用户打开新的标签页时，插件会自动将新标签页移动到当前活动标签页的右侧。
- 这个功能可以帮助用户更好地组织和管理标签页，使相关的标签页保持在一起。

## 安装方法

1. 克隆或下载此仓库到本地。
2. 打开Chrome浏览器，进入`chrome://extensions/`页面。
3. 开启右上角的"开发者模式"。
4. 点击"加载已解压的扩展程序"按钮。
5. 选择包含插件文件的文件夹。

## 使用方法

插件安装后会自动在后台运行，无需任何额外操作。当您打开新的标签页时，它会自动排在当前标签页的后面。

## 文件结构

- `manifest.json`: 插件的配置文件
- `background.js`: 插件的后台脚本
- `icon.png`: 插件图标（48x48像素）

## 注意事项

- 此插件需要 "tabs" 和 "activeTab" 权限来管理标签页。
- 插件不会影响已经打开的标签页，只会对新打开的标签页生效。

## 未来改进计划

- 添加用户界面，允许用户自定义插件行为。
- 增加快捷键支持，方便用户快速调整标签页顺序。
- 优化性能，减少对浏览器整体性能的影响。

## 贡献

欢迎提交问题和改进建议。如果你想为这个项目做出贡献，请遵循以下步骤：

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 将你的改动推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

这个项目使用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如果您有任何问题或建议，请通过 GitHub Issues 与我们联系。
