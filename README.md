# 后端
### 安装环境
##### virtualenv
安装
```bash
pip3 install virtualenv
```
准备一个python3的virtualenv
```bash
virtualenv --python=python3.6 --no-site-packages venv
```
激活virtualenv
```bash
source venv/bin/activate
```
##### Django
```bash
pip install django
```

### 创建项目
创建project
```bash
django-admin startproject myblog
```
创建app
```bash
django-admin startapp api
```