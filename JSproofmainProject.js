/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?//array
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let m = 1;
const NFT_num = [];
function mintNFT (_brand, _productType, _shade, _price, _expiryDate) {
    const nftObj = {
        "Brand" : _brand,
        "Product Type" : _productType,
        "Shade" : _shade,
        "Price" : _price,
        "Expiry Date" : _expiryDate
    };
    NFT_num.push(nftObj);
    console.log("\nMinted[" + m + "]: " + _brand);
    m++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFT_num.length; i++) {
        console.log("\nID: \t" + (i + 1));
        console.log("Brand: \t" + NFT_num[i].Brand);
        console.log("Product Type: \t" + NFT_num[i]["Product Type"]);
        console.log("Shade: \t" + NFT_num[i].Shade);
        console.log("Price: \t" + NFT_num[i].Price);
        console.log("Expiry Date: " + NFT_num[i]["Expiry Date"]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFT's that we have minted = " + NFT_num.length);
}

// call your functions below this line
mintNFT("Maybelline", "Lipstick", "Red", "$10", "2025-12-01");
mintNFT("L'Oréal", "Foundation", "Beige", "$15", "2024-06-15");
mintNFT("MAC", "Eyeshadow Palette", "Nude", "$40", "2026-03-22");
mintNFT("Dior", "Mascara", "Black", "$30", "2025-08-10");
mintNFT("Revlon", "Blush", "Peach", "$12", "2024-11-05");
listNFTs();
getTotalSupply();
