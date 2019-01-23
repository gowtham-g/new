(function(pWindow) {
	if(typeof pWindow.CustomGrid == "function") {
		throw new Error("Custom Table already defined");
	}

	/*===================== creating default values=============*/

	var CustomGrid= function(pId, options) {
		if(!(this instanceof CustomGrid)) {
			return new CustomGrid(pId, options);
		}
		this.domEl = document.getElementById(pId);
		if(!this.domEl) {
			throw new Error("dom not found");
		}
		this.options=options||{};
		if(typeof this.options.data == "undefined")  {
			this.options.data = [];
		}

		this._Table();

		
	};
	/*==================== creating new list================*/


	CustomGrid.prototype._Table = function(){
		
		var mainDiv = document.getElementById('grid');
		var p = document.createElement('p');
		p.textContent = "search";
		mainDiv.appendChild(p);
		var input = document.createElement('input');
		input.setAttribute("onkeyup",'search(this.value)');
		var button = document.createElement("button");
		button.textContent="button";
		button.style.height = "30px";
		button.style.width = "60px";
		button.setAttribute("onclick",'backcolor(this,this.value)');
		mainDiv.appendChild(button)
		input.classList.add('col-lg-5');
		mainDiv.appendChild(input);


		/*--------------------Overall-total user-------------- */
		var totalDiv = document.createElement('div');
		totalDiv.style.overflow ="auto";
		totalDiv.setAttribute('class',"col-lg-4 box");
		totalDiv.style.marginTop = "40px";
		totalDiv.style.height = "350px";
		totalDiv.style.width = "700px";
		mainDiv.appendChild(totalDiv);



		/*--------------Mark List-------------------*/

		var markDiv = document.createElement('div');
		markDiv.style.height = "500px";
		markDiv.style.width="300px";
		markDiv.style.border="0px solid black";
		mainDiv.appendChild(markDiv);
		markDiv.style.float ="right";				
		
		
		var name = document.createElement('p');
		name.textContent ="Student Name";
		markDiv.appendChild(name);

		var inputbox = document.createElement('input')
		inputbox.setAttribute('id','stdName');
		markDiv.appendChild(inputbox);
				
		var name = document.createElement('p');
		name.textContent ="M1";
		markDiv.appendChild(name);
		var inputbox = document.createElement('input');
		inputbox.setAttribute('class','marks');

		markDiv.appendChild(inputbox);
		var name = document.createElement('p');
		name.textContent ="M2";
		markDiv.appendChild(name);
		var inputbox = document.createElement('input');
		inputbox.setAttribute('class','marks');

		markDiv.appendChild(inputbox);
		var name = document.createElement('p');
		name.textContent ="M3";
		markDiv.appendChild(name);
		var inputbox = document.createElement('input');
		inputbox.setAttribute('class','marks');

		markDiv.appendChild(inputbox);
		var name = document.createElement('p');
		name.textContent ="M4";
		markDiv.appendChild(name);
		var inputbox = document.createElement('input');
		inputbox.setAttribute('class','marks');

		markDiv.appendChild(inputbox);
		var name = document.createElement('p');
		name.textContent ="M5";
		markDiv.appendChild(name);
		var inputbox = document.createElement('input');
		inputbox.setAttribute('class','marks');
		markDiv.appendChild(inputbox);
			
			
	


			





			/*------------------------User-------------------------*/

			for(i=0;i<this.options.data.length;i++)
			{
				var userDiv = document.createElement('div');
				userDiv.setAttribute('id',i)
				userDiv.setAttribute("onkeyup",'backcolor(this,this.id)');

				var img = document.createElement('img');
				img.setAttribute('src','assets/img/student.png');
				userDiv.appendChild(img);
				var p2 = document.createElement('p');
				p2.textContent = this.options.data[i]['Student Name'];
				p2.style.paddingLeft = "45px";
				userDiv.appendChild(p2);
				img.style.width = "140px";
				userDiv.setAttribute('class' ,' col-lg-2 searchBox');
				userDiv.style.marginRight = "10px";
				userDiv.style.borderRadius ="100px"
				userDiv.style.marginBottom = "10px";
				userDiv.style.height ="180px";
				userDiv.style.width ="180px";
				totalDiv.appendChild(userDiv);	


		}


	}


	/*------------------------Search----------------------------*/

	CustomGrid.prototype._filter = function(e)
	{
		
		var filter  = document.querySelectorAll(".searchBox");
		var item = e.toUpperCase();
		for (i = 0; i < filter.length; i++) {
			a = this.options.data[i]['Student Name'];
			if (a.toUpperCase().indexOf(item) > -1) {
				filter[i].style.display = "";
			} else {
				filter[i].style.display = "none";
			}
		}



		/*------------------------background Color --------------------------*/

	}
	
	CustomGrid.prototype._color=function(){

				var box  = document.querySelectorAll(".box");
				console.log(box);
				clone = box.cloneNode(true); 
				grid.append(clone);


		}



	pWindow.CustomGrid = CustomGrid;
})(window)