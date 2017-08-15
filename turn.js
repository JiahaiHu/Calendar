	var turn_btns = document.getElementsByClassName("turn-btn");
	
	var index = document.getElementById("index");
	var ftv_24 = document.getElementById("ftv-24");
	var ftv_30 = document.getElementById("ftv-30");
	var ftv_1 = document.getElementById("ftv-1");
	var ftv_3 = document.getElementById("ftv-3");
	var ftv_7 = document.getElementById("ftv-7");
	var today = document.getElementById("today");

	function turn_index(){
		index.style.transform = "perspective(2000px) rotateY(-178deg)";
	}

	function turn_index_back(){
		index.style.transform = "perspective(2000px) rotateY(-0deg)";
	}

	function turn_24(){
		ftv_24.style.transform = "perspective(2000px) rotateY(-156deg)";
	}

	function turn_24_back(){
		ftv_24.style.transform = "perspective(2000px) rotateY(0deg)";
	}

	function turn_30(){
		ftv_30.style.transform = "perspective(2000px) rotateY(-134deg)";
	}

	function turn_30_back(){
		ftv_30.style.transform = "perspective(2000px) rotateY(0deg)";
	}

	function turn_1(){
		ftv_1.style.transform = "perspective(2000px) rotateY(-112deg)";
	}

	function turn_1_back(){
		ftv_1.style.transform = "perspective(2000px) rotateY(0deg)";
	}

	function turn_3(){
		ftv_3.style.transform = "perspective(2000px) rotateY(-90deg)";
	}

	function turn_3_back(){
		ftv_3.style.transform = "perspective(2000px) rotateY(0deg)";
	}

	function show_index(){
		events.index = 0;
		turn_index_back();
		turn_24_back();
		turn_30_back();
		turn_1_back();
		turn_3_back();
	}

	function show_24(){
		events.index = 1;
		turn_index();
		turn_24_back();
		turn_30_back();
		turn_1_back();
		turn_3_back();
	}

	function show_30(){
		events.index = 2;
		turn_index();
		turn_24();
		turn_30_back();
		turn_1_back();
		turn_3_back();
	}

	function show_1(){
		events.index = 3;
		turn_index();
		turn_24();
		turn_30();
		turn_1_back();
		turn_3_back();
	}

	function show_3(){
		events.index = 4;
		turn_index();
		turn_24();
		turn_30();
		turn_1();
		turn_3_back();
	}

	function show_7(){
		events.index = 5;
		turn_index();
		turn_24();
		turn_30();
		turn_1();
		turn_3();
	}