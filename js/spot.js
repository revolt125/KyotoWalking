var spot = [
	{
		name: "清水寺",
		type: "temple",
		imgs: "../img/spot/spot_0.jpg",
		detail:
			"可以俯瞰京都全景的清水寺，就坐落於京都東邊的一座小山上。寺廟內以巨大柱子支撐的高台，可以說是日本最著名的「景像」之一。清水寺提供的不僅是優美的景色。其實您在踏上造訪寺廟的旅程時，體驗就已經開始了。",
	},
	{
		name: "金閣寺",
		type: "temple",
		imgs: "../img/spot/spot_1.jpg",
		detail:
			"金閣寺聳立在鏡湖池水之中，是座四方形的建築。為顯示幕府武士政權的一統天下的至上權力，金閣寺舍利殿的一至三層的樓閣分別為不同風格的建築，第一層為皇家宮廷式的建築，第二層為代表幕府政權的武士建築，第三層為佛教風格的建築，但這三種不同的建築風格居然完美地融合在一起，成為日本的一座奇特的歷史建築。",
	},
	{
		name: "伏見稻禾大社",
		type: "shrine",
		imgs: "../img/spot/spot_2.jpg",
		detail:
			"伏見稻荷大社是全日本稻荷神社的總本社，供奉保佑五穀豐收、生意興隆的稻荷大神。通往稻荷山的路上聳立著看似無窮無盡的亮橘色鳥居，令人嘆為觀止，更是日本最著名的景觀之一。",
	},
	{
		name: "嵐山",
		type: "other",
		imgs: "../img/spot/spot_3.jpg",
		detail: "",
	},
	{
		name: "二條城",
		type: "other",
		imgs: "../img/spot/spot_4.jpg",
		detail: "",
	},
	{
		name: "慈照寺",
		type: "temple",
		imgs: "../img/spot/spot_5.jpg",
		detail: "",
	},
	{
		name: "錦市場",
		type: "other",
		imgs: "../img/spot/spot_6.jpg",
		detail: "",
	},
	{
		name: "八坂神社",
		type: "shrine",
		imgs: "../img/spot/spot_7.jpg",
		detail: "",
	},
	{
		name: "花見小路",
		type: "other",
		imgs: "../img/spot/spot_8.jpg",
		detail: "",
	},
	{
		name: "八坂之塔",
		type: "temple",
		imgs: "../img/spot/spot_9.jpg",
		detail: "",
	},
	{
		name: "京都塔",
		type: "other",
		imgs: "../img/spot/spot_10.jpg",
		detail: "",
	},
	{
		name: "醍醐寺",
		type: "temple",
		imgs: "../img/spot/spot_11.jpg",
		detail: "",
	},
];

for (let i = 0; i < spot.length; i++) {
	document.querySelector(
		"#spot-container"
	).innerHTML += `<div class="col-sm-6 col-lg-4 my-2">
						<div 							data-bs-toggle="modal"
							data-bs-target="#detail${i}" class="card text-end">
							<img
								src="${spot[i].imgs}"
								class="card-img-top"
								alt="${spot[i].name}"
							/>
                            <div class='filter'></div>
							<div class="card-img-overlay d-flex justify-content-center align-items-center">
								<h4 class="spot-title text-center">${spot[i].name}</h4>
							</div>
						</div>
					</div>`;

	document.querySelector("#modal-box").innerHTML += `				<div
					class="modal fade"
					id="detail${i}"
					tabindex="-1"
					aria-labelledby="detailModalLabel1"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered modal-xl">
						<div class="modal-content">
							<div class="modal-body">
								<div class="row">
									<div class="col-12 col-md-12 col-lg-8">
										<div
											id="carouselExampleControls${i}"
											class="carousel slide"
											data-bs-ride="carousel"
										>
											<div class="carousel-inner">
												<div class="carousel-item active">
													<img
														src="./img/spot/spot_${i}_0.jpg"
														class="d-block w-100"
														alt="..."
													/>
												</div>
												<div class="carousel-item">
													<img src="./img/spot/spot_${i}_1.jpg"." class="d-block
													w-100" alt="..." />
												</div>
												<div class="carousel-item">
													<img src="./img/spot/spot_${i}_2.jpg"" class="d-block
													w-100" alt="..." />
												</div>
											</div>
											<button
												class="carousel-control-prev"
												type="button"
												data-bs-target="#carouselExampleControls${i}"
												data-bs-slide="prev"
											>
												<span
													class="carousel-control-prev-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Previous</span>
											</button>
											<button
												class="carousel-control-next"
												type="button"
												data-bs-target="#carouselExampleControls${i}"
												data-bs-slide="next"
											>
												<span
													class="carousel-control-next-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Next</span>
											</button>
										</div>
									</div>
									<div class="col-12 col-md-12 col-lg-4 mt-2 mt-sm-2 mt-lg-0 ">
										<h3 class="text-center text-lg-start">${spot[i].name}</h3>
										<hr />
										<p>${spot[i].detail}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`;
}
