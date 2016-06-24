# according
可以折叠的手风琴-原生态JS组件
# 用法
## Step1 引用插件
~~~
<script src="js2-1-2according.js"></script>
~~~
## Step2 调用插件
~~~
window.onload=init;
function init(){
		new according({dom:"acc1",title:"acc_title",content:"acc_content",index:0})
		}
~~~
## Step3 html书写格式
~~~
<div class="acc1">
				<h3 class="acc_title">标题1</h3>
				<div class="acc_content">内容1</div>
				<h3 class="acc_title">标题2</h3>
				<div class="acc_content">内容2</div>
				<h3 class="acc_title">标题3</h3>
				<div class="acc_content">内容3</div>
		</div>
~~~
