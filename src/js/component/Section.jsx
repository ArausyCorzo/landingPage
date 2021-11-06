import React from "react";

const Section = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card-body">
							<h1 className="card-title">A WARM WELCOME!</h1>
							<p className="card-text">
								Lorem impsu dolor sit amet, consecteur
								adipisicing elit. Ipsa, ipsam, eligendi, in quo,
								sunt possimus non incidunt odit vero aliquid
								similique quaeerat nam nobis illo aspernatur
								vitae fugiat numquam repellat
							</p>
							<a href="#" className="btn btn-primary">
								Call to action!
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12 col-md-3 col-ls-3">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src={
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8N8AWGqGtH0j8WU_M-Wb-KvnbzmiVPNHqw&usqp=CAU"
							}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								{`Some quick example text to build on the card title and make up the bulk of the card's content.`}
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-3 col-lg-3">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src={
								"https://t1.ea.ltmcdn.com/es/images/0/3/1/como_nacen_las_estrellas_de_mar_25130_600_square.jpg"
							}
							className="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">{`Some quick example text to build on the card title and make up the bulk of the card's content.`}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-3 col-lg-3">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src={
								"https://i.pinimg.com/550x/7f/fb/a3/7ffba30da64ad704e8cacff49ea708c6.jpg"
							}
							className="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">{`Some quick example text to build on the card title and make up the bulk of the card's content.`}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-3 col-lg-3">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src={
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYgiInAazz-zvVa4cMCQoNsSTwv18iGGDvMkNr-Va1264ddu89zRFB2pg-AtuuzUnk_E&usqp=CAU"
							}
							className="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">{`Some quick example text to build on the card title and make up the bulk of the card's content.`}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
