function start() {
			var height=parseFloat(document.getElementById("heightId").value);
			var width=parseFloat(document.getElementById("widthId").value);
			

			/*let selectedPanels = document.getElementById("noOfPanels");
  			let selectedColour = document.getElementById("profileColour");
  			let selectedFixedPartition = document.getElementById("fixedPartition");
  			let type;

			selectedPanel.onchange = function(){
			    let selectedValue1 = selectedPanel.value;
			    let selectedValue2 = selectedColour.value;
			    let selectedValue3 = selectedFixedPartition.value;
   			if (selectedValue1 === '3' && selectedValue2 === 'black' && selectedValue3 === 'fixedTop') {
        	type = "type4";*/

			var	type=document.getElementById("choseType").value;

			

			
			var headerP;
			var sillP;
			var	jambP;
			var	interLock;
			var	lockSection;
			var	topBottom;
			var glass;
			var rubber;
			var rollers;
			var lock;
			var installation;
			var totals;
			var tube;
			var butterfly;
			var guiders;
			var woolFile;
			var jambCover;
			var pInner;
			var pOutter;
			var sideArms;
			var bidding;
			var singleHeader;
			var oneEighty;
			var oneThirtyNine;
			var oneFourtyTwo;
			var twoSixtyFive;
			var divider;



				 if (type=="type1") { //2 sliding panels w/o fx.
					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height+100)*2)/1000)*500;
					lockSection=(((height+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8)); //glass
					rubber=(((height*4)+(width*2))/1000)*50;
					rollers=4*150;
					lock=1*350;
					guiders=8*20;
					woolFile=((height*4)/1000)*70;
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(headerP);
					console.log(sillP);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(woolFile);


					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+guiders+woolFile);
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}	else if (type=="type2") { //3 sliding panels w/o fx.

					jambP=(((height+100)*2)/1000)*600;
					console.log(jambP);
					interLock=(((height+100)*4)/1000)*500;
					lockSection=(((height+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass
					rubber=(((height*6)+(width*2))/1000)*50;
					rollers=4*100; //roller
					lock=2*500;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;


					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+guiders+woolFile);
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));


				} 	else if (type=="type3") { //2 sliding panels single fx 400mm.
					var height1=height-400;
					const heightFx=400;
					var heightFt=height/304.8;
					var widthFt=width/304.8;

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*2)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=(heightFt*widthFt)*200; //glass				
					rubber=(((height1/1000)*4)+((width/1000)*4)+((heightFx/1000)*4))*50;
					rollers=4*100; //roller
					lock=1*500;
					tube=((width+heightFx)/1000)*600;
					butterfly=(((width*2)/1000)+(heightFx*4)/1000)*320;
					guiders=8*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(jambCover);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type4") { ////3 sliding panels single fx 400mm

					var height1=height-500;
					const heightFx=500;

					jambP=(((height+10)*2)/1000)*600;
					interLock=(((height1+10)*4)/1000)*500;
					lockSection=(((height1+10)*2)/1000)*500;
					topBottom=(((width+10)*2)/1000)*500;
					headerP=((width+10)/1000)*600;
					sillP=((width+10)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*4)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller //roller
					lock=2*500;
					tube=(((width)+(heightFx*2))/1000)*600;
					butterfly=(((width*2)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(headerP);
					console.log(sillP);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(tube);
					console.log(butterfly);
					console.log(guiders);
					console.log(woolFile);
					console.log(jambCover);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type5") { //2 sliding panels double fx 400mm each.

					var height1=height-800; //less 800 for top & bottom fixed sections. 
					const heightFx=800; //Constant height for both fixed sections.

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*2)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*4)+((width/1000)*6)+((heightFx/1000)*4))*50;
					rollers=4*100; //roller
					lock=1*500;
					tube=(((width*2)+heightFx)/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*4)/1000)*320;
					guiders=8*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(jambCover);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type6") { //3 sliding panels double fx 400mm each.

					var height1=height-800; //less 800 for top & bottom fixed sections.
					const heightFx=800; //Constant height for both fixed sections. 

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*6)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width*2)+(heightFx*2))/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type7") { //3 sliding panels double fx (400mm bottom, 900 top).

					var height1=height-1300; //less 1300 for top & bottom fixed sections.
					const heightFx=1300; //Constant height for both fixed sections. 

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*6)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width*2)+(heightFx*2))/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(woolFile);
					console.log(jambCover);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
				
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation)

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}else if (type=="type8") { //4 sliding panels double fx each 400mm

					var height1=height-800;
					const heightFx=800;

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*4)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*6)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width*2)+(heightFx*2))/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}else if (type=="type9") { //4 sliding panels double fx (400mm bottom, 900 top)

					var height1=height-1300;
					const heightFx=1300;

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*4)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*6)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width*2)+(heightFx*2))/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}else if (type=="type10") { //2 sliding panels double fx (400mm bottom, 900 top)

					var height1=height-1300;
					const heightFx=1300;

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*2)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*4)+((width/1000)*6)+((heightFx/1000)*4))*50;
					rollers=4*100; //roller
					lock=1*500;
					tube=(((width*2)+heightFx)/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*4)/1000)*320;
					guiders=8*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(jambCover);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}else if (type=="type11") { //4 sliding panels single fx (400mm bottom or top)

					var height1=height-400;
					const heightFx=400

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*4)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*4)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width)+(heightFx*2))/1000)*600;
					butterfly=(((width*2)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type12") { //Bath window bottom fix
					pOutter=(((height*2)+(width*3))/1000)*550;
					pInner=(((height)+(width*2))/1000)*550;
					bidding=(((height*2)+(width*4))/1000)*390;
					sideArms=1*800;
					rubber=(((height*2)+(width*4))/1000)*50;
					lock=1*500;
					glass=((height/304.8)*(width/304.8))*200; //glass

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type13") { //Custom projecting light window
					pOutter=(((height*3)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*1.9)+(width))/1000)*550;
					console.log(pInner);
					bidding=(((height*4)+(width*3))/1000)*390;
					console.log(bidding);
					sideArms=1*800;
					rubber=(((height*4)+(width*3))/1000)*50;
					lock=1*500;
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type14") {//4 sliding panels double fx each 400mm

					var height1=height-800;
					const heightFx=800;

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*4)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass			 	
					rubber=(((height1/1000)*6)+((width/1000)*6)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width*2)+(heightFx*2))/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type15") { //Single centre-hung
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height)+(width*4))/1000)*550;
					console.log(pInner);
					bidding=(((height*2)+(width*4))/1000)*390;
					console.log(bidding);
					sideArms=1*800;
					rubber=(((height*2)+(width*4))/1000)*50;
					lock=1*500;
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type16") { //3 panel sliding door (top fx 500mm)

					var height1=height-500;
					const heightFx=500;

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*4)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width)+(heightFx*2))/1000)*600;
					butterfly=(((width*2)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;
					singleHeader=(height1/1000)*550;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(singleHeader);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover+singleHeader);
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type17") { //4 panel sliding door (top fx 500mm)

					var height1=height-500;
					const heightFx=500;
					console.log(height1);

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*4)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*4)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=2*500;
					tube=(((width)+(heightFx*3))/1000)*600;
					butterfly=(((width*2)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;
					singleHeader=(height1/1000)*550;
					divider=((width*0.5)/1000)*500;

					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(singleHeader);
					console.log(divider);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover+singleHeader+divider);
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type18") { //Top-hung Bath window w/o fx
					pOutter=(((height*2)+(width*2))/1000);
					console.log(pOutter);
					pInner=(((height*2)+(width*3))/1000);
					console.log(pInner);
					bidding=(((height*2)+(width*4))/1000);
					console.log(bidding);
					sideArms=1;
					console.log(sideArms);
					rubber=(((height*2)+(width*4))/1000);
					console.log(rubber);
					lock=1;
					console.log(lock);
					glass=((height/304.8)*(width/304.8)); //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type19") {//Fixed partition with Door at the middle. (Door width 1100mm)

					var height1=height-200;
					const width1=1100;
					var hinges;
					var handle;

					oneEighty=((((height+100)*4)+((width+100)*2))/1000)*600;
					oneThirtyNine=((width+100)/1000)*600;
					twoSixtyFive=((((height1+100)*2)+((width1+100)*2))/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass		 	
					rubber=(((height/1000)*6)+((width/1000)*4))*50;
					lock=2*500;
					oneFourtyTwo=(((height/1000)*6)+((width/1000)*4))*250;
					hinges=2*400;
					handle=1*1000;

					console.log(oneEighty);
					console.log(oneThirtyNine);
					console.log(twoSixtyFive);
					console.log(glass);
					console.log(rubber);
					console.log(lock);
					console.log(oneFourtyTwo);
					console.log(hinges);
					console.log(handle);
			


					totals=(oneEighty+oneThirtyNine+twoSixtyFive+glass+rubber+lock+oneFourtyTwo+hinges+handle);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}  else if (type=="type20") { //Single centre-hung
					pOutter=(((height*2)+(width*3))/1000)*550;
					console.log(pOutter);
					pInner=(((height)+(width*2))/1000)*550;
					console.log(pInner);
					bidding=(((height*2)+(width*4))/1000)*390;
					console.log(bidding);
					sideArms=1*800;
					rubber=(((height*2)+(width*4))/1000)*50;
					lock=1*500;
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}else if (type=="type21") {
					var g2;
					var g3;
					glass=((height/304.8)*(width/304.8))*200; //glass
					g2=((height/304.8)*(width/304.8))*240;
					g3=g2-glass;
					console.log(glass);
					console.log(g2);
					console.log(g3);

				}else if (type=="type22") { //3 sliding panels with bottom FX and Awning tops (400mm bottom, 900 top).

					var height1=height-1300; //less 1300 for top & bottom fixed sections.
					var awningHeight=900; //constant 0.9m height for awning
					const heightFx=1300; //Constant height for both fixed sections. 

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*4)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*6)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=4*500;
					tube=(((width*2)+(heightFx*2))/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*6)/1000)*320;
					guiders=12*10;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;
					pOutter=(((width*1.33333333)/1000)+((awningHeight*4)/1000))*550;
					pInner=(((width*1.33333333)/1000)+((awningHeight*4)/1000))*550;
					sideArms=2*800;



					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(woolFile);
					console.log(jambCover);
					console.log(pOutter);
					console.log(pInner);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover+pOutter+pInner+sideArms);
				
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				} else if (type=="type23") { //2 sliding panels with bottom FX and Awning tops (400mm bottom, 900 top).

					var height1=height-1300; //less 1300 for top & bottom fixed sections.
					var awningHeight=900; //constant 0.9m height for awning
					const heightFx=1300; //Constant height for both fixed sections. 

					jambP=(((height+100)*2)/1000)*600;
					interLock=(((height1+100)*2)/1000)*500;
					lockSection=(((height1+100)*2)/1000)*500;
					topBottom=(((width+100)*2)/1000)*500;
					headerP=((width+100)/1000)*600;
					sillP=((width+100)/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass				
					rubber=(((height1/1000)*6)+((width/1000)*6)+((heightFx/1000)*6))*50;
					rollers=4*100; //roller
					lock=3*500;
					tube=(((width*2)+(heightFx*2))/1000)*600;
					butterfly=(((width*4)/1000)+(heightFx*6)/1000)*320;
					guiders=12*30;
					woolFile=((height*2)/1000)*100;
					jambCover=((heightFx*2)/1000)*320;
					pOutter=(((width*0.6666666)/1000)+((awningHeight*2)/1000))*550;
					pInner=(((width*0.66666666)/1000)+((awningHeight*2)/1000))*550;
					sideArms=2*800;



					console.log(headerP);
					console.log(sillP);
					console.log(jambP);
					console.log(interLock);
					console.log(lockSection);
					console.log(topBottom);
					console.log(tube);
					console.log(butterfly);
					console.log(glass);
					console.log(rubber);
					console.log(rollers);
					console.log(lock);
					console.log(guiders);
					console.log(woolFile);
					console.log(jambCover);
					console.log(pOutter);
					console.log(pInner);

					totals=(jambP+interLock+lockSection+topBottom+headerP+sillP+glass+lock+rollers+rubber+tube+butterfly+guiders+woolFile+jambCover+pOutter+pInner+sideArms);
				
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}	else if (type=="type24") { //Small top Top-hung with a fixed bottom (60 pc fixed)
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*0.4)+(width*3))/1000)*550;
					console.log(pInner);
					bidding=(((height*2)+(width*4))/1000)*390;
					console.log(bidding);
					sideArms=1*800;
					console.log(sideArms);
					rubber=(((height*2)+(width*4))/1000)*50;
					console.log(rubber);
					lock=1*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

					} else if (type=="type25") { //Top-hung with a fixed bottom (70 pc)
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*1.4)+(width*3))/1000)*550;
					console.log(pInner);
					bidding=(((height*2)+(width*4))/1000)*390;
					console.log(bidding);
					sideArms=1*800;
					console.log(sideArms);
					rubber=(((height*2)+(width*4))/1000)*50;
					console.log(rubber);
					lock=1*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}	else if (type=="type26") { //double Top-hung with fixed bottoms (70 pc openable)
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*3.8)+(width*3))/1000)*550;
					console.log(pInner);
					bidding=(((height*4)+(width*4))/1000)*390;
					console.log(bidding);
					sideArms=2*800;
					console.log(sideArms);
					rubber=(((height*4)+(width*4))/1000)*50;
					console.log(rubber);
					lock=2*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}	else if (type=="type27") { //Custom side-hung (60 pc fixed)
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*3)+(width))/1000)*550;
					console.log(pInner);
					bidding=(((height*4)+(width*2))/1000)*390;
					console.log(bidding);
					sideArms=1*800;
					console.log(sideArms);
					rubber=(((height*4)+(width*4))/1000)*50;
					console.log(rubber);
					lock=1*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}	else if (type=="type28") { //custom-side-hung-2 Fixed bottoms & side
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*2.4)+(width*1.8))/1000)*550;
					console.log(pInner);
					bidding=(((height*4)+(width*4))/1000)*390;
					console.log(bidding);
					sideArms=1*800;
					console.log(sideArms);
					rubber=(((height*4)+(width*4))/1000)*50;
					console.log(rubber);
					lock=1*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));
					
				}	else if (type=="type29") { ////double side hung center fx
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*6)+(width*1))/1000)*550;
					console.log(pInner);
					bidding=(((height*6)+(width*2))/1000)*390;
					console.log(bidding);
					sideArms=2*800;
					console.log(sideArms);
					rubber=(((height*4)+(width*4))/1000)*50;
					console.log(rubber);
					lock=2*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));
					
				}	else if (type=="type30") { ////double side hung center & btm fx
					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*4.8)+(width*2))/1000)*550;
					console.log(pInner);
					bidding=(((height*6)+(width*4))/1000)*390;
					console.log(bidding);
					sideArms=2*800;
					console.log(sideArms);
					rubber=(((height*4)+(width*4))/1000)*50;
					console.log(rubber);
					lock=2*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}	else if (type=="type31") {//swing Door with fixed top

					var height1=height-300;
					var hinges;
					var handle;

					oneEighty=((((height+100)*2)+(width+100))/1000)*600;
					oneThirtyNine=((width+100)/1000)*600;
					twoSixtyFive=((((height1+100)*2)+((width+100)*2))/1000)*600;
					glass=((height/304.8)*(width/304.8))*200; //glass		 	
					rubber=(((height/1000)*2)+((width/1000)*4))*50;
					lock=1*1500;
					oneFourtyTwo=(((height/1000)*2)+((width/1000)*4))*300;
					hinges=2*400;
					handle=1*1000;

					console.log(oneEighty);
					console.log(oneThirtyNine);
					console.log(twoSixtyFive);
					console.log(glass);
					console.log(rubber);
					console.log(lock);
					console.log(oneFourtyTwo);
					console.log(hinges);
					console.log(handle);
			


					totals=(oneEighty+oneThirtyNine+twoSixtyFive+glass+rubber+lock+oneFourtyTwo+hinges+handle);
					
					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);

					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}	else if (type=="type32") { ////stair curtain wall 0.18 pc high vents

					pOutter=(((height*2)+(width*2))/1000)*550;
					console.log(pOutter);
					pInner=(((height*2.5)+(width*8))/1000)*550;
					console.log(pInner);
					bidding=(((height*4)+(width*10))/1000)*390;
					console.log(bidding);
					sideArms=4*800;
					console.log(sideArms);
					rubber=(((height*4)+(width*10))/1000)*50;
					console.log(rubber);
					lock=4*500;
					console.log(lock);
					glass=((height/304.8)*(width/304.8))*200; //glass
					console.log(glass);

					totals=(pOutter+pInner+bidding+sideArms+rubber+lock+glass);

					installation=(0.275*totals);
					console.log(totals);
					console.log(installation);
					console.log(totals+installation);
					
					document.getElementById("cost").value=" Ksh. "+(Math.round(totals+installation));

				}
		}
		
		function typeGallery() {
				var	type=document.getElementById("choseType").value;

				if (type=="type1") {
					document.getElementById("img-type").src="img/type-1.png";
				} else if (type=="type2") {
					document.getElementById("img-type").src="img/type-2.png";
				} else	if (type=="type3") {
					document.getElementById("img-type").src="img/type-3.png";
				} else	if (type=="type4") {
					document.getElementById("img-type").src="img/type-4.png";
				} else	if (type=="type5") {
					document.getElementById("img-type").src="img/type-5.png";
				} else	if (type=="type6") {
					document.getElementById("img-type").src="img/type-6.png";
				} else	if (type=="type13") {
					document.getElementById("img-type").src="img/custom-1.png";
				}else	if (type=="type15") {
					document.getElementById("img-type").src="img/custom-2.png";
				} else	if (type=="type20") {
					document.getElementById("img-type").src="img/custom-3.png";
				} else	if (type=="type26") {
					document.getElementById("img-type").src="img/double-top-hung.png";
				} else	if (type=="type27") {
					document.getElementById("img-type").src="img/custom-side-hung.png";
				} else	if (type=="type28") {
					document.getElementById("img-type").src="img/custom-side-hung-2.png";
				} else	if (type=="type29") {
					document.getElementById("img-type").src="img/double-side-hung-center-fx.png";
				} else	if (type=="type32") {
					document.getElementById("img-type").src="img/stair-curtain-wall.png";
				} else	if (type=="type30") {
					document.getElementById("img-type").src="img/double-side-hung-bottom-fx.png";
				}



		}