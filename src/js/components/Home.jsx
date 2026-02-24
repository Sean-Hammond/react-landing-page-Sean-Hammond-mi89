import React from "react";

//create your first component
const Home = () => {
  const cardsInfo = [
    {
      title: "Outdoor Photo",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus porro veritatis dignissimos corporis dolorum, reprehenderit, adipisci illo numquam magni iusto facere voluptate eligendi incidunt accusamus cumque nobis beatae molestias?",
    },
    {
      title: "Outdoor Photo",
      description:
        "Harum ad ipsam quis enim? Maxime perferendis fugiat enim. Cumque aliquam possimus quis esse praesentium maiores atque corporis sunt eum, neque placeat!",
    },
    {
      title: "Outdoor Photo",
      description:
        "Fugiat aliquam itaque, iusto, non quasi laborum harum tempore nesciunt deleniti modi, fugit aperiam recusandae facere debitis sapiente laudantium odio cum praesentium!",
    },
    {
      title: "Outdoor Photo",
      description:
        "Ipsam dignissimos error porro ipsa consequuntur nesciunt tenetur ab, asperiores odit eius labore! Vitae ut consequuntur excepturi nam obcaecati ex? Itaque, temporibus?",
    },
  ];

  return (
    <div>
      <Navbar />
	  <div className="container">
		<Jumbotron />
		<div className="row">
			{cardsInfo.map((cardInfo, index) => (
				<div className="col-12 col-lg-3" key={index}>
					<Card 
						cardTitle={cardInfo.title}
						cardDescription={cardInfo.description}
					/>
				</div>
			))}
		</div>
	  </div>
	  <Footer />
    </div>
  );
};

export default Home;
