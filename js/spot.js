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
		detail:
			"嵐山橫跨京都右京和西京區，是京都知名景點。以世界遺產天龍寺-因日本名著《源氏物語》而聞名的「清涼寺」為首，可看到許多寺院。橫跨在桂川之上，連結右京和西京區的渡月橋是欣賞紅葉的熱點。初冬之際，嵐山著名景點「嵐山花燈路」會有夜間點燈活動。在嵯峨和龜山之間7.3公里的路段上也有觀光電車可搭乘，旅程約25分鐘，可以盡情享受周邊美麗的自然風景。",
	},
	{
		name: "二條城",
		type: "other",
		imgs: "../img/spot/spot_4.jpg",
		detail:
			"世界遺產二條城是以包圍整個佔地的護城河、二之丸、本丸、天守閣遺跡和庭園所組成。江戶幕府的初代將軍德川家康為了守護京都御所，以及將軍來京都時曾住宿的地方，於1603年下建築二條城。",
	},
	{
		name: "慈照寺",
		type: "temple",
		imgs: "../img/spot/spot_5.jpg",
		detail:
			"慈照寺(銀閣寺)始建於 15 世紀，是幕府將軍足利義政退位後隱居的別院，如今已成為日本最具代表性的禪寺之一，堪稱侘寂殘缺美學的典範之作。在改為寺院之前，這座別院是東山文化的發源地，茶道、插花、詩歌和能劇皆是於此發展壯大。如今，銀閣寺是京都最著名的寺院之一。",
	},
	{
		name: "錦市場",
		type: "other",
		imgs: "../img/spot/spot_6.jpg",
		detail:
			"錦市場是位於京都市中京區中部錦小路通中「寺町通 - 高倉通」區間的一條商店街。沿線的商舖大多銷售魚，京都蔬菜等生鮮食材或乾貨，醃菜等加工食品，且老店眾多。在這裡可以買到眾多京都特有的食材，因此又有「京都的廚房」之稱。",
	},
	{
		name: "八坂神社",
		type: "shrine",
		imgs: "../img/spot/spot_7.jpg",
		detail:
			"被京都人以擬人化暱稱為「祇園さん」的八坂神社，是祈願疾病退散的「祇園神社」總本社，也是每個旅人到京都旅行時必訪之地。八坂神社舊名「感神院祇園社」（簡稱「祇園社」），關於何時建立眾說紛紜。有一說是西元656年，高麗國的使節把牛頭天山的素盞鳴尊帶到山城國（現在的京都）八坂鄉供奉開始。也就是說，在平安京遷都之前，八坂神社的歷史已揭開序幕。",
	},
	{
		name: "花見小路",
		type: "other",
		imgs: "../img/spot/spot_8.jpg",
		detail:
			"花見小路是日本最知名的花街，更是海內外觀光客到京都旅行時必訪的超人氣景點。這裡有許多深藏不露的米其林星級餐廳、享譽日本全國的甜點店以及許多以「不接受一見客」聞名的茶屋，時常可見要去茶屋工作的藝妓、舞妓們快步穿梭在石板路上。還有更多以和服裝扮到此拍照留念、用餐的海內外遊客。",
	},
	{
		name: "八坂之塔",
		type: "temple",
		imgs: "../img/spot/spot_9.jpg",
		detail:
			"法觀寺是飛鳥時代所創建的寺院，高達46公尺的五重塔也是最代表當地的景觀，因此有「八坂塔」的稱號。現在是日本國家重要的文化財，也是旅客到清水寺路上最醒目的指標。沿途還有高台寺、圓德院、靈山觀音到著名的清水寺，是負載著滿滿歷史的一區。",
	},
	{
		name: "京都塔",
		type: "other",
		imgs: "../img/spot/spot_10.jpg",
		detail:
			"位於京都市下京區的京都塔，高131公尺可是京都市內最高的建築物，純白色塔身頂端妝點上一抹紅，讓即使是不靠海的京都街道也能擁有指點光明路徑的一盞燈塔。100公尺高的觀景台俯瞰的優美景色，360度悠然獨享京都的街道、廟寺、群山環繞之情懷。",
	},
	{
		name: "醍醐寺",
		type: "temple",
		imgs: "../img/spot/spot_11.jpg",
		detail:
			"創建於西元873年，屬於京都文化財、世界遺產的一員，醍醐寺因遠離京都市中心，而多了一份寧靜神聖的感覺。醍醐寺共分為上醍醐與下醍醐兩部分，上醍醐位於醍醐山頂，需花費一小時的山路，才能到達這醍醐寺的創始之地，而這趟山路稱為「伽藍」。山下的下醍醐則是腹地廣闊，豐臣秀吉所建的三寶院，與逃過慶應之亂，完整保存下來的國寶五重塔皆在此處。",
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
