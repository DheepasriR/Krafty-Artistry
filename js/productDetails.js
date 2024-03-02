// array of products
var productList = {
    "1": { name : "Hand-Painted Dinner Set", image: "../media/images/hand-made-dinner-set.jpg", price: "$80.00",
        description: "Colored Hand-painted Ceramic Plate,William Morris Flower Pattern Plate,Animal Pattern Salad Ceramic Plate,Restaurant Art Decoration",
        quantity: 20 },
    "2": { name : "Hand-Carved Convex mirror", image: "../media/images/hand-carved-convex-mirror.jpg", price: "$45.00",
        description: "A Master piece indeed. The convex wall mirror with rosewood frame is intricately hand carved, over days by our expert artisan, who has honed the skill for generations. The dark lustre of rosewood carved with floral motifs revives the royalty that once was in the princely town of ‘Mysore’, the birthplace of the craft.",
        quantity: 12 },
    "3": { name : "Hand-Beaten Tea Set", image: "../media/images/hand-beaten-tea-set.jpg", price: "$50.00",
        description: "Elegant tea-set with a twist, presented to add to your trinkets of artistic collection Minimal aesthetics of traditions. Here the craft meets functionality. Individually hammer beaten, bringing out the multitude of grains – the rainbow specular & the vintage matt.",
        quantity: 18 },
    "4": { name : "Stone Sculpture Lamp", image: "../media/images/stone-sculpture-lamp.jpg", price: "$100.00",
        description: "Ringing to your outdoor an illuminated stone sculpture. Subtly hand-etched pattern, depicting the imperfectly harmonious oceanic waves. Drama of the inner carvings heightened with a playful combination of The Bright & The Shadow. Life mimicked!",
        quantity: 22 },
    "5": { name : "Fish' Handmade & Hand-Painted Garden Decorative Wall Hanging", image: "../media/images/decor-1.jpg", price: "$18.00",
        description: "A cheerful cow treads across a meadow, consuming dewy grass for breakfast as the delicate crimson sun dances over the horizon. The wise owls head back to their nests, as their nocturnal routine comes to an end.",
        quantity: 15 },
    "6": { name : "Terracotta Warli Handpainted Pots Blue Set Of 3", image: "../media/images/decor-2.jpg", price: "$23.00",
        description: "A very charming and ethnic bright blue earthen miniatures set of 3 in terracotta crafted in unique shapes with handpainting with vibrant colours like white and golden paint. The soft brightning golden colour on the top makes the set look elegant when decorated tastefully.",
        quantity: 25 },
    "7": { name : "Hand-Painted Ceramic Chutney & Pickle Bowls", image: "../media/images/decor-3.jpg", price: "$50.00",
        description: "The hut collection is a representation of an old and rustic village in South India, hand-painted by Victor & his team residing in Puducherry. The spread of huts, with its picturesque triangular shapes and equally symmetrical windows, captures the many views of a serene Puducherry village.",
        quantity: 17 },
    "8": { name : "Warli Hand-Painted Key Holder With Dhokra Art", image: "../media/images/decor-4.jpg", price: "$100.00",
        description: "Delicately handcrafted in Wood by craftspeople from the interiors of India, €˜In-key-genous€™ is a wall mount key holder, inspired from the simple life of Indian tribes and hand-painted with detailed Warli art.",
        quantity: 13 },
    "9": { name : "'Floral Block' Hand Carved Towel Ring Holder In Sheesham Wood", image: "../media/images/decor-5.jpg", price: "$40.00",
        description: "The 'Floral Block' from the collection 'The Jungle Blocks', is a Towel Holder handcrafted in Sheesham Wood by the skilled artisans of India.",
        quantity: 24 },
    "10": { name : "'Birds On Planks' Warli Hand-Painted Key Holder In Sheesham Wood", image: "../media/images/decor-6.jpg", price: "$45.00",
        description: "Delicately handcrafted in sheesham wood by craftspeople from the interiors of India, €˜Birds On Planks is a wall-mount key holder, inspired from native Indian tribal life, hand-painted with indigenous Warli art, brought to life with two beautifully hand-painted colourful birds.",
        quantity: 8 },
    "11": { name : "Terracotta Warli Handpainted Pots With Sheesham Wooden Frame Wall Hanging", image: "../media/images/decor-7.jpg", price: "$50.00",
        description: "The multicolured handpainted warli assorted set of 8 pots have been uniquely placed on a sheesham wooden frame to add color and life to your wall. The unique shapes of the pots have also been kept into consideration while placing them in the frame.",
        quantity: 28 },
    "12": { name : "Shankh' Brass Diya In Brass", image: "../media/images/decor-8.jpg", price: "$28.00",
        description: "This product is a part of the 'Brass Beams' collection. Inspired by the beauty, versatility, and craftsmanship of the brass material, found in the valleys of many Indian states like Andhra Pradesh, Uttar Pradesh, West Bengal, and Madhya Pradesh.",
        quantity: 7 },
    "13": { name : "Wooden Parrot Bell Earrings ~ Red ", image: "../media/images/accessories-1.jpg", price: "$20.00",
        description: "These pretty and exquisite pair of Samoolam earrings adds a Traditional Touch to Your Ensembles. Pair these Intricate Earrings with an Ethnic Outfit to Craft a Precious Look in no time at all. Especially handcrafted with wooded bird dangling pieces, it is sure to set a statement.",
        quantity: 10 },
    "14": { name : "Swing Earrings ~ Turquoise Floral", image: "../media/images/accessories-2.jpg", price: "$16.00",
        description: "A pair of these shoulder-dusting crochet beaded or floral Samoolam earrings can add that touch of drama to your plain outfit.",
        quantity: 11 },
    "15": { name : "Miharu Brass Thread Choker Necklace", image: "../media/images/accessories-3.jpg", price: "$20.00",
        description: "This handmade necklace made with colour-fast cotton threads and recycled brass. They are made by a combination of Patwa work and Dokra craft - old Indian crafts.",
        quantity: 30 },
    "16": { name : "Miharu Strip Brass Bangles", image: "../media/images/accessories-4.jpg", price: "$15.00",
        description: "These bangles are handmade in brass available in size 2.6 and 2.4.",
        quantity: 2 },
    "17": { name : "Leaf Silver Filigree Nazarbattu", image: "../media/images/accessories-5.jpg", price: "$22.00",
        description: "Protect yourself from the evil eye with this black thread Nazarbattu. Nazar Battu Anklet is a black thread anklet worn to ward off the evil eye. This pretty nazarbattu has a Silver Filigree Charm dangling elegently.",
        quantity: 12 },
    "18": { name : "Hand Embroidered Pure Cotton Unisex Apron", image: "../media/images/accessories-6.jpg", price: "$12.00",
        description: "The embroidered catchphrases on these aprons are like no other. You will find â€˜Wash Your Damn Handsâ€™ on this piece which is a definite conversation starter with your guests. ",
        quantity: 32 },
    "19": { name : "Hand Embroidered Mask", image: "../media/images/accessories-7.jpg", price: "$8.00",
        description: "The embroidered catchphrases on these aprons are like no other. You will find â€˜Wash Your Damn Handsâ€™ on this piece which is a definite conversation starter with your guests. ",
        quantity: 14 },
    "20": { name : "Silver Filigree Handmade Ring", image: "../media/images/accessories-8.jpg", price: "$30.00",
        description: "The Silver filigree Ring is handmade in Cuttack in the fine art of Filigree. The ring is inspired by the Chakra or the wheel. The ring is light weight and look absolutely stunning! The ring is made with Silver wires.",
        quantity: 4 },
    "21": { name : "Handknotted Crochet Tote Bag - Round, White & Yellow", image: "../media/images/bag-1.jpg", price: "$42.00",
        description: "Handknotted Macramé Tote Bag - Round, White & Yellow crafted from cotton yarn with with brown nappa leather slings. A lovely handcrafted accessory with a bohemian charm of its own - perfect for casual outings to hold all your daily essentials.",
        quantity: 25 },
    "22": { name : "Rugged Leather Duffler Bag", image: "../media/images/bag-2.jpg", price: "$38.00",
        description: "An elegant and durable travel accessory crafted from pure leather by artisans in Rajasthan that makes for a unique style statement. Perfect as a memorable gift too!.",
        quantity: 34 },
    "23": { name : "Handcrafted Leather Cross Body Bag With Hand Stitch Detail", image: "../media/images/bag-3.jpg", price: "$30.00",
        description: "A smart, elegant accessory, this beautifully crafted cross body bag is a unique style statement. The bag comes with an outer pocket and two zippers.",
        quantity: 22 },
    "24": { name : "Personalised Luna Crossbody Bag - Black", image: "../media/images/bag-4.jpg", price: "$29.00",
        description: "The perfect quick-utility carry everywhere bag, which is durable and compact. It is thoughtfully designed to fit your essentials and has a zipper on the front.",
        quantity: 18 },
    "25": { name : "Personalised Laptop Bag - Nautical Waves", image: "../media/images/bag-5.jpg", price: "$31.00",
        description: "Compact and with minimal organization, this Laptop Bag is the ideal choice for you, whether you are attending a meeting or stepping out to work.",
        quantity: 10 },
    "26": { name : "Personalised Verve Zip-around Womens Wallet - Dusty Rose", image: "../media/images/bag-6.jpg", price: "$24.00",
        description: "Womens wallets are one of the fondest accessories that most of the women look for everywhere. ",
        quantity: 15 },
    "27": { name : "Personalised Mens Crossbody Bag - Back & Tan", image: "../media/images/bag-7.jpg", price: "$50.00",
        description: "Keep your valuable items safe and close to you (at an arm’s length, quite literally) with an additional pocket on the outside and the main zipper it stores a lot of your essentials.",
        quantity: 17 },
    "28": { name : "Personalised Everyday Work Tote Bag - White", image: "../media/images/bag-8.jpg", price: "$60.00",
        description: "Classic, lightweight structured silhouettes that seamlessly transitions from work to weekend and undoubtedly is your Everyday Work Tote. Spacious, versatile and made to ultimately fit in all your essentials, comes in 3 stunning colors.",
        quantity: 10 },
    "29": { name : "Glowing Vines Handcrafted Wall Sconce Tea Light Holders In Iron With Glass Holders", image: "../media/images/lighting-1.jpg", price: "$24.00",
        description: "The 'Glowing Vines' is a wall tea-light holder set comprising of 2 rectangular-shaped tea-light wall frames handcrafted in iron which come with 4 bucket-shaped glass holders covered with golden foiling on the outside containing 1 tea-light candle each.",
        quantity: 22 },
    "30": { name : "Hanging Bottle Shaped Handapinted Terracotta Tea Light Holder", image: "../media/images/lighting-2.jpg", price: "$15.00",
        description: "This yellow coloured hanging tealight crafted from terracotta is a fantastic addition to your home décor and is a latest trend of every household for dim lighting. The light from the tealight diffuses beautifully from the decorative floral cutwork done at the centre.",
        quantity: 34 },
    "31": { name : "Birds On Branch Handcrafted Wall Sconce Tea Light Holder In Iron With Glass Holders", image: "../media/images/lighting-3.jpg", price: "$36.00",
        description: "The 'Birds On Branch' is a wall tea-light holder set comprising of 1 tea-light wall frame handcrafted in iron which comes with 2 bucket-shaped glass holders covered with golden foils on the outside containing 1 tea-light candle each.",
        quantity: 41 },
    "32": { name : "Morrocan Flame' Hand-etched Pendant Lamp In Iron", image: "../media/images/lighting-4.jpg", price: "$100.00",
        description: "The moroccan patterns, exquisite cutwork, intricate designs, and authenticity of this beautiful pendant makes it a work of art waiting to be hung in an exciting corner of your home.",
        quantity: 28 },
    "33": { name : "20 Inch Dhokra And Warli Handpainted Wooden Lamp Brown", image: "../media/images/lighting-5.jpg", price: "$40.00",
        description: "The base of the lamp has a unique shape and is in the form of a tray with 2 brass fishes as a decor. A small decorative piece can be put between the fish figures. The shade is handpainted.",
        quantity: 31 },
    "34": { name : "Handcrafted Warli & Dhokra Art Wall Lamp", image: "../media/images/lighting-6.jpg", price: "$37.00",
        description: "This beautiful wall lamp will give your wall an extremely special turn. The white Warli Art on this light delineates the harmony between the hues and the Dhokra miniatures on this lamp depict celebrations. Crafted out of Sheesham wood, it has an earthy look to it.",
        quantity: 21 },
    "35": { name : "10 Inch Modern Frosted Glass Lamp In Sheesham Wood", image: "../media/images/lighting-7.jpg", price: "$50.00",
        description: "The golden rays of the summer sun falling softly through the gaps in the leaves, never fails to fill us with a sense of belonging to this beautiful season.",
        quantity: 19 },
    "36": { name : "Ceramic Gas Stove Brewing Aroma Diffuser", image: "../media/images/lighting-8.jpg", price: "$100.00",
        description: "Delicately handcrafted in ceramic, Brewing Aromas is an Aroma Diffuser with a unique form, embellished with a beautiful ombre glaze of brown and pistachio green. ",
        quantity: 23 },
    "37": { name : "Personalised Flat Pouch - Nautical Waves", image: "../media/images/travel-1.jpg", price: "$20.00",
        description: "This stylish flat pouch is perfect for all your everyday stash! From stationery to make up, it fits in all.",
        quantity: 18 },
    "38": { name : "Personalised Luggage Tag - Wanderlust", image: "../media/images/travel-2.jpg", price: "$12.00",
        description: "Personalised luggage tag made with pure leather and authentic designs.",
        quantity: 18 },
    "39": { name : "Personalised Travel Wallet - Light Blue", image: "../media/images/travel-3.jpg", price: "$20.00",
        description: "Make your travel trips relaxed and stress-free with your own personalized travel wallet. To suit your travel needs, they are perfect for keeping your passport, currency & tickets together in one safe place.",
        quantity: 18 },
    "40": { name : "Exclusive Passport Cover - Road Rush", image: "../media/images/travel-4.jpg", price: "$24.00",
        description: "A great travel companion and a cover that you will always want to hold in your hands! Made with premium vegan leather, it’s perfect, durable, quirky, and is sure to stand out from the crowd.",
        quantity: 18 },
    "41": { name : "Exclusive Passport Cover - I Woof You", image: "../media/images/travel-5.jpg", price: "$30.00",
        description: "Personalised passport cover made with pure leather and authentic designs.",
        quantity: 18 },
    "42": { name : "Personalised Travel Wallet - Dark Blue", image: "../media/images/travel-6.jpg", price: "$18.00",
        description: "Make your travel trips relaxed and stress-free with your own personalized travel wallet. To suit your travel needs, they are perfect for keeping your passport, currency & tickets together in one safe place.",
        quantity: 18 },
    "43": { name : "Personalised Couple Leather Luggage Tag", image: "../media/images/travel-7.jpg", price: "$19.00",
        description: "Personalised luggage tag for couples made with special leather.",
        quantity: 18 },
    "44": { name : "Personalised Large Vanity Pouch - Tan", image: "../media/images/travel-8.jpg", price: "$100.00",
        description: "Our spacious LARGE pouch is beautifully designed to carry everything from your makeup essentials to your shaving kit. Stay organized and stylish while you carry them hassle-free, also you can customize them with your name which is absolutely perfect for you.",
        quantity: 18 },

        
        
    
};

// fetching id from the url
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get("id");

// Display the product details
if (productList[productId]) {
    const product = productList[productId];
    const productHTML =
    '<div class="product-container">' +
    '   <div class="product-image">' +
    '       <img width="433" height="516" src="' + product.image + '" alt="Product" class="product-image">' +
    '   </div>' +
    '   <div class="product-details">' +
    '       <h2>' + product.name + '</h2>' +
    '       <h5>' + product.description + '</h5>' +
    '       <p class="price">' + product.price + '</p>' +
    '       <p for="quantity">' + product.quantity + ' in stock</p>' +
    '       ' +
    '   </div>' +
    '</div>';

        // setting the html as per the product selected from the producta array
        document.getElementById("product-details").innerHTML = productHTML;
    
    console.log(product.name);
} else {
    productDetails.textContent = "Product not found.";
}
