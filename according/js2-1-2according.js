function according(obj){
		this.obj=obj;
		this.dom=document.getElementsByClassName(this.obj.dom)[0];
		this.titles=this.dom.getElementsByClassName(this.obj.title);
		this.contents=this.dom.getElementsByClassName(this.obj.content);
		this.index=this.obj.index;
		this.leng=this.titles.length;
		this.h_title;
		this.h_content;
		this.init();
		this.binddom();
	}
	according.prototype.init=function(){
		for(var i=0;i<this.leng;i++){
			if(i==this.index){
				this.titles[i].className=this.obj.title+" active";
				this.contents[i].className=this.obj.content;
				this.h_title=this.titles[i];
				this.h_content=this.contents[i];
			}else{
				this.titles[i].className=this.obj.title;
				this.contents[i].className=this.obj.content+" hide";
			}
			
		}
	}
	according.prototype.binddom=function(){
		var main=this;
		for(var i=0;i<main.leng;i++){
			(function(){
				var j=i;
				main.titles[j].onclick=function(){
					if(main.titles[j]==main.h_title){
					main.titles[j].className=main.obj.title;
					main.contents[j].className=main.obj.content+" hide";	
					
					}
					main.titles[j].className=main.obj.title+" active";
					main.contents[j].className=main.obj.content;
					main.h_title.className=main.obj.title;
					main.h_content.className=main.obj.content+" hide";
					main.h_title=main.titles[j];
					main.h_content=main.contents[j];	
				}
			}())
		}
	}