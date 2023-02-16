var spot = [
	{
		name: "清水寺",
		type: "temple",
		imgs: "../img/spot/spot_1.jpg",
		detail: "",
	},
	{
		name: "金閣寺",
		type: "temple",
		imgs: "../img/spot/spot_2.jpg",
		detail: "",
	},
	{
		name: "伏見稻禾大社",
		type: "shrine",
		imgs: "../img/spot/spot_3.jpg",
		detail: "",
	},
	{
		name: "嵐山",
		type: "other",
		imgs: "../img/spot/spot_4.jpg",
		detail: "",
	},
	{
		name: "二條城",
		type: "other",
		imgs: "../img/spot/spot_5.jpg",
		detail: "",
	},
	{
		name: "慈照寺",
		type: "temple",
		imgs: "../img/spot/spot_6.jpg",
		detail: "",
	},
	{
		name: "錦市場",
		type: "other",
		imgs: "../img/spot/spot_7.jpg",
		detail: "",
	},
	{
		name: "八坂神社",
		type: "shrine",
		imgs: "../img/spot/spot_8.jpg",
		detail: "",
	},
	{
		name: "花見小路",
		type: "other",
		imgs: "../img/spot/spot_9.jpg",
		detail: "",
	},
	{
		name: "八坂之塔",
		type: "temple",
		imgs: "../img/spot/spot_10.jpg",
		detail: "",
	},
	{
		name: "京都塔",
		type: "other",
		imgs: "../img/spot/spot_11.jpg",
		detail: "",
	},
	{
		name: "醍醐寺",
		type: "temple",
		imgs: "../img/spot/spot_12.jpg",
		detail: "",
	},
];

for (let i = 0; i < spot.length; i++) {
	document.querySelector(
		"#spot-container"
	).innerHTML += `<div class="col-sm-6 col-lg-4 my-2">
						<div class="card text-end">
							<img
								src="${spot[i].imgs}"
								class="card-img-top"
								alt="${spot[i].name}"
							/>
							<div class="card-img-overlay d-flex justify-content-center align-items-center">
								<h5 class="card-title text-center">${spot[i].name}</h5>
							</div>
						</div>
					</div>`;
}
