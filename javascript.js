import myJson from './data.json' assert {type: 'json'}

let container = document.getElementById('container')
container.style.width = "100vw",
  container.style.height = "100vh",
  container.style.backgroundColor = 'white'



// Top bar
let top_bar = document.createElement('div')
/**@type {CSSStyleDeclaration} */
let top_barStyle = {
  width: "100%",
  height: "45px",
  background: "#292929",
  bordertop: "1px solid #2f2e2a",
  position: "1px solid #2f2e2a",

}
Object.assign(top_bar.style, top_barStyle)


let son_top_bar = document.createElement('div')
/**@type {CSSStyleDeclaration} */
let son_top_barStyle = {
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "160px",
  paddingLeft: "160px",
  // marginBottom: "150px",
}
Object.assign(son_top_bar.style, son_top_barStyle)
top_bar.appendChild(son_top_bar)


let phone = document.createElement('div')
/**@type {CSSStyleDeclaration} */
let phoneStyle = {
  display: "flex",
  alignItems: 'center',
}
Object.assign(phone.style, phoneStyle)
son_top_bar.appendChild(phone)

let iconPhone = document.createElement('i')
iconPhone.classList.add("fa-solid", "fa-phone-flip")
iconPhone.style.color = "#FDFEFE"
iconPhone.style.fontSize = "14px"
iconPhone.style.marginRight = "10px"
phone.appendChild(iconPhone)

let hotline = document.createElement('p')
hotline.style.color = "#cccccc"
hotline.style.fontSize = "14px"
hotline.style.marginRight = "5px"
hotline.innerHTML = "Hotline:"
phone.appendChild(hotline)

let numberPhone = document.createElement('p')
numberPhone.style.color = "#cccccc"
numberPhone.style.fontSize = "14px"
numberPhone.innerHTML = "0868.444.644"
phone.appendChild(numberPhone)

let introduce = document.createElement('div')
/**@type {CSSStyleDeclaration} */
let introduceStyle = {
  display: "flex",
  alignItems: 'center',
}
Object.assign(introduce.style, introduceStyle)
son_top_bar.appendChild(introduce)

let choseSize = document.createElement('p')
choseSize.style.color = "#cccccc"
choseSize.style.fontSize = "14px"
choseSize.style.marginRight = "5px"
choseSize.innerHTML = "Cách chọn Size"
introduce.appendChild(choseSize)

let vipGuests = document.createElement('p')
vipGuests.style.color = "#cccccc"
vipGuests.style.fontSize = "14px"
vipGuests.style.marginRight = "5px"
vipGuests.innerHTML = "Chính sách khách Vip"
introduce.appendChild(vipGuests)

let intro = document.createElement('p')
intro.style.color = "#cccccc"
intro.style.fontSize = "14px"
intro.style.marginRight = "5px"
intro.innerHTML = "Giới thiệu"
introduce.appendChild(intro)





// Nabar
let nabar = document.createElement('header')
let nabarStyle = {
  width: "100%",
  height: "70px",
  backgroundColor: "while",
}
Object.assign(nabar.style, nabarStyle)

let son_nabar = document.createElement('div')
let son_nabarStyle = {
  width: "80%",
  height: "100%",
  display: "flex",
  alignItems: 'center',
  paddingLeft: "150px",
  justifyContent: "space-between",

}
Object.assign(son_nabar.style, son_nabarStyle)
nabar.appendChild(son_nabar)

let img_nabar = document.createElement('img')
img_nabar.src = "https://4menshop.com/logo.png?v=1"
son_nabar.appendChild(img_nabar)

let center_nabar = document.createElement('div')
let center_nabarStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  paddingLeft: "300px"
}
Object.assign(center_nabar.style, center_nabarStyle)
son_nabar.appendChild(center_nabar)

let hangMoiVe = document.createElement('p')
hangMoiVe.style.width = "150px";
hangMoiVe.style.fontSize = "15px"
hangMoiVe.style.margin = "30px 0px"
hangMoiVe.style.padidng = "0px 0px"
hangMoiVe.innerHTML = "HÀNG MỚI VỀ"
center_nabar.appendChild(hangMoiVe)

let aoNam = document.createElement('p')
aoNam.style.width = "100px";
aoNam.style.fontSize = "15px"
aoNam.style.margin = "30px 0px"
aoNam.innerHTML = "ÁO NAM"
center_nabar.appendChild(aoNam)

let quanNam = document.createElement('p')
quanNam.style.width = "100px"
quanNam.style.fontSize = "15px"
quanNam.style.margin = "30px 0px"
quanNam.innerHTML = "QUẦN NAM"
center_nabar.appendChild(quanNam)

let phuKien = document.createElement('p')
phuKien.style.width = "100px"
phuKien.style.fontSize = "15px"
phuKien.style.margin = "30px 0px"
phuKien.innerHTML = "PHỤ KIỆN"
center_nabar.appendChild(phuKien)

let giayDep = document.createElement('p')
giayDep.style.width = "100px"
giayDep.style.fontSize = "15px"
giayDep.style.margin = "30px 0px"
giayDep.innerHTML = "GIÀY DÉP"
center_nabar.appendChild(giayDep)

let khuyenMai = document.createElement('p')
khuyenMai.style.width = "100px"
khuyenMai.style.fontSize = "15px"
khuyenMai.style.margin = "30px 0px"
khuyenMai.innerHTML = "KHUYẾN MÃI"
center_nabar.appendChild(khuyenMai)

let iconNabar = document.createElement('div')
/**@type {CSSStyleDeclaration} */
let iconNabarStyle = {
  width: "100%",
  display: "flex",
  alignItems: 'flex-end',
  marginLeft: '120px'

}
Object.assign(iconNabar.style, iconNabarStyle)
son_nabar.appendChild(iconNabar)


// Cart
let iconCart = document.createElement('i')
iconCart.classList.add("fa-sharp", "fa-solid", "fa-cart-shopping");
iconCart.style.fontSize = "15px"
iconCart.style.color = "#641E16"
iconCart.style.marginRight = "10px"
iconNabar.appendChild(iconCart)

let overlayElement = document.createElement('div');
let overlayElementStyle = {
  position: "fixed",
  display: "none",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "2",
  cursor: "pointer",
};
Object.assign(overlayElement.style,overlayElementStyle)
overlayElement.onclick = off;
container.appendChild(overlayElement);


let cartDiv = document.createElement('div');
let carDivStyle = {
  border: "1px solid black",
  width: "800px",
  height: "400px",
  backgroundColor: "white",
  position: "fixed", // Sử dụng position: fixed để căn giữa phần tử
  top: "50%", // Đưa phần tử vào giữa theo trục dọc
  left: "50%", // Đưa phần tử vào giữa theo trục ngang
  transform: "translate(-50%, -50%)", // Dịch chuyển phần tử để căn giữa hoàn toàn
  msTransform: "translate(-50%, -50%)",
}
Object.assign(cartDiv.style, carDivStyle);
overlayElement.appendChild(cartDiv)

//Update item in cart
function updateCartDiv() {
  cartDiv.innerHTML = "";
  cart.forEach((item) => {
    let itemDiv = document.createElement('div');
    let itemDivStyle = {
      pointEvents : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-between',
      padding: "5px",
      borderBottom: "1px solid #ccc"
    }

    Object.assign(itemDiv.style, itemDivStyle);

    let itemImg = document.createElement('img')
    itemImg.src = item.img;
    itemImg.style.width = "50px";
    itemImg.style.height = "50px";


    let itemName = document.createElement('p');
    itemName.innerHTML = item.name;
    itemName.style.marginRight = "10px";

    let itemPrice = document.createElement('p');
    itemPrice.innerHTML = item.price;

    let itemQuantity = document.createElement('p');
    itemQuantity.innerHTML = "Quantity: " + item.quantity;

    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);
    itemDiv.appendChild(itemQuantity);

    cartDiv.appendChild(itemDiv);
  })

  //Sum
  let totalDiv = document.createElement('div');
  let totalDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px",
    borderTop: "1px solid #ccc",
    fontWeight: "bold",
  };
  Object.assign(totalDiv.style, totalDivStyle);

  let totalText = document.createElement('p');
  totalText.innerText = "Tổng Tiền:";

  let totalAmount = document.createElement('p');
  totalAmount.innerText = calculateTotal();

  totalDiv.appendChild(totalText);
  totalDiv.appendChild(totalAmount);

  // Thêm totalDiv vào cartDiv
  cartDiv.appendChild(totalDiv);

}

//closeButton
let closeButton = document.createElement("button");
closeButton.innerText = 'X';

let closeButtonStyle = {
  position: 'absolute',
  top: '140px',
  right: '330px',
  backgroundColor: 'transparent',
  border: '2px solid white',
  borderRadius: '100%',
  fontSize: '20px',
  color: 'white',
  cursor: 'pointer',
};

Object.assign(closeButton.style, closeButtonStyle);

closeButton.onclick = off;

overlayElement.appendChild(closeButton);


//payButton
let payButton = document.createElement('button');

payButton.innerText = 'Thanh Toán';
let payButtonStyle = {
  position: 'absolute',
  bottom: '130px',
  left: '670px',
  backgroundColor: 'transparent',
  border: '2px solid white',
  borderRadius: '30px',
  fontSize: '20px',
  color: 'white',
  cursor: 'pointer',
};

Object.assign(payButton.style, payButtonStyle);

payButton.addEventListener("click", () => {
  pay();
})

overlayElement.appendChild(payButton);




iconCart.onclick = on;
function on() {
  overlayElement.style.display = 'block';
}

function off(event) {
  if (event.target === closeButton) {
    overlayElement.style.display = 'none';
  }
}









let iconSearch = document.createElement('i')
iconSearch.classList.add("fa-solid", "fa-magnifying-glass")
iconSearch.style.fontSize = "15px"
iconSearch.style.color = "#641E16"
iconNabar.appendChild(iconSearch)


// bottom bar
let bottom_bar = document.createElement('div')
let bottom_barStyle = {
  width: "100%",
  height: "40px",
  backgroundColor: "#f8f8f8"
}
Object.assign(bottom_bar.style, bottom_barStyle)



let title_bottomNav = document.createElement('p')
title_bottomNav.innerHTML = "4MEN / Áo nam"
title_bottomNav.style.fontSize = "15px"
title_bottomNav.style.paddingTop = "10px"
title_bottomNav.style.paddingLeft = "150px"
bottom_bar.appendChild(title_bottomNav)




//Main
let main = document.createElement('main')
let mainStyle = {
  width: "100%",
  height: "1200px",
  // backgroundColor: "#FADBD8"
}
Object.assign(main.style, mainStyle)



let title = document.createElement('div')
let titleStyle = {
  with: "100%",
  height: "40px",
  backgroundColor: "white",
  marginTop: "10px",
}
Object.assign(title.style, titleStyle)
main.appendChild(title)

let sec_titile = document.createElement('h2')
sec_titile.style.color = "black"
sec_titile.innerHTML = "ÁO NAM"
sec_titile.style.paddingLeft = "150px"
title.appendChild(sec_titile)

let icon_title = document.createElement('img')
icon_title.src = "../img/iconBottomNav.png"
icon_title.style.width = "150px"
icon_title.style.height = "30px"
icon_title.style.marginLeft = "980px"
icon_title.style.marginTop = "-150px"
sec_titile.appendChild(icon_title)

let line = document.createElement('div')
let lineStyle = {
  borderBottom: "1px dashed black",
  marginTop: "10px",
  marginRight: "150px"
}
Object.assign(line.style, lineStyle)
sec_titile.appendChild(line)



let content = document.createElement('div')
let contentStyle = {
  with: "80%",
  height: "1100px",
  // backgroundColor: "#7D6608",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: 'center',
}
Object.assign(content.style, contentStyle)
main.appendChild(content)

// items with aside in main
let items = document.createElement('div')
let itemsStyle = {
  width: "60%",
  height: "100%",
  // backgroundColor: "#85929E",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: 'center'
}
Object.assign(items.style, itemsStyle)
content.appendChild(items)


// ADD TO CART
for (let i = 0; i < myJson.length; i++) {
  let shirt = myJson[i];
  let cart = document.createElement('div')
  let cartStyle = {
    width: "30%",
    height: "500px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    boxSizing: "border-box",
    margin: "5px",

  }
  Object.assign(cart.style, cartStyle)

  let img = document.createElement('img')
  img.src = myJson[i].img
  img.style.width = "90%"
  img.style.height = "atuo"
  img.style.marginBottom = "5px"

  let sm_img = document.createElement('img')
  sm_img.src = myJson[i].img
  sm_img.style.width = "50px"
  sm_img.style.height = "atuo"

  let name = document.createElement('p')
  name.innerHTML = myJson[i].name
  name.style.fontSize = "20px"
  name.style.marginBottom = "5px"

  let price = document.createElement('p')
  price.innerHTML = myJson[i].price
  price.style.fontSize = "20px"
  price.style.marginTop = "5px"
  price.style.color = "#c80204"

  cart.appendChild(img)
  cart.appendChild(sm_img)
  cart.appendChild(name)
  cart.appendChild(price)
  items.appendChild(cart)

  cart.addEventListener("click", () => {
    addToCart(shirt);
  })
}

class Shirt {
  /**
   * @param {string} id
   * @param {string} name
   * @param {number} price
   */
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
/**@type {Shirt[]} */
let cart = [];

function addToCart(shirt) {
  let index = cart.findIndex((item) => {
    return item.id == shirt.id;
  });
  if (index != -1) {
    cart[index].quantity++;
    console.log(cart);
  } else {
    cart.push({
      id: shirt.id,
      img: shirt.img,
      name: shirt.name, 
      price: shirt.price,
      quantity: 1,
    });
    console.log(cart);
  }
  
  updateCartDiv(); // Cập nhật nội dung của cartDiv sau khi thêm item vào cart
  return;
}

function calculateTotal() {
  let total = 0;
  cart.forEach((item) => {
    myJson.forEach((shirt) => {
      if (shirt.id == item.id) {
        total += shirt.price * item.quantity;
      }
    });
  });
  return total;
}

function pay() {
  if (cart.length == 0) {
    alert("Chưa có đồ nào trong giỏ hàng");
  } else {
    let total = calculateTotal();
    alert("Tổng Tiền là: " + total);
    cart = [];
    updateCartDiv(); // Để xóa mọi mặt hàng sau khi đã thanh toán
  }
}



let aside = document.createElement('aside')
let asideStyle = {
  width: "20%",
  height: "100%",
  // backgroundColor: "#17A589"
}
Object.assign(aside.style, asideStyle)
content.appendChild(aside)

let divSearch = document.createElement('div')
let divSearchStyle = {
  margin: "5px 20px"
}
Object.assign(divSearch.style, divSearchStyle)
aside.appendChild(divSearch)

let title_search = document.createElement('h4')
title_search.innerHTML = "TÌM KIẾM"
title_search.style.color = "#273746"
title_search.style.marginTop = "40px"
divSearch.appendChild(title_search)

let line_search = document.createElement('div')
let line_searchStyle = {
  borderBottom: "1px solid #cccccc ",
  marginTop: "-25px",
  marginLeft: "90px"
}
Object.assign(line_search.style, line_searchStyle)
divSearch.appendChild(line_search)

let itemSreach = document.createElement('h4')
itemSreach.innerHTML = "Sản Phẩm tại 4MEN "
itemSreach.style.color = "#273746"
itemSreach.style.marginLeft = "25px"
itemSreach.style.marginTop = "-65px"
aside.appendChild(itemSreach)

// Tạo input tìm kiếm
let inputForm = document.createElement('input');
inputForm.type = 'text'; // Đặt kiểu input là text
inputForm.placeholder = 'Từ khóa tìm kiếm'; // Đặt chữ gợi ý trong input
let inputFormStyle = {
  width: '250px',
  padding: '8px',
  fontSize: '14px',
  color: '#ddd',
  border: '1px solid #ccc',
  marginTop: '40px',
  marginLeft: '5px'
}
Object.assign(inputForm.style, inputFormStyle);
divSearch.appendChild(inputForm);

//san pham hot
let divItemsHot = document.createElement('div')
let divItemHotStyle = {
  margin: "70px 25px",
  marginBottom: "20px"
}
Object.assign(divItemsHot.style, divItemHotStyle)
aside.appendChild(divItemsHot)

let title_itemsHot = document.createElement('h4')
title_itemsHot.innerHTML = "SẢN PHẨM HOT"
title_itemsHot.style.color = "#273746"
title_itemsHot.style.marginTop = "40px"
divItemsHot.appendChild(title_itemsHot)

let line_itemsHot = document.createElement('div')
let line_itemsHotStyle = {
  borderBottom: "1px solid #cccccc ",
  marginTop: "-25px",
  marginLeft: "130px"
}
Object.assign(line_itemsHot.style, line_itemsHotStyle)
divItemsHot.appendChild(line_itemsHot)

let itemsListHot = document.createElement('div')
let itemsListHotStyle = {
  width: "100%",
  height: "800px",
  // backgroundColor: "orange",
  justifyContent: 'center',
}
Object.assign(itemsListHot.style, itemsListHotStyle)
aside.appendChild(itemsListHot)


for (let i = 0; i < myJson.length; i++) {
  let shirt = myJson[i];
  let cartHot = document.createElement('div')
  let cartHotStyle = {
    display: "flex",
    alignItems: "center",
    width: "300px",
    height: "120px",
    backgroundColor: "white",
    marginBottom: "5px",

  }
  Object.assign(cartHot.style, cartHotStyle)

  let img = document.createElement('img')
  img.src = myJson[i].img
  img.style.width = "25%"
  img.style.height = "atuo"
  img.style.marginBottom = "5px"
  img.style.marginLeft = "25px"
  img.style.border = "3px solid #D7DBDD";


  let name = document.createElement('p')
  name.innerHTML = myJson[i].name
  name.style.fontSize = "14px"
  name.style.marginBottom = "5px"

  let price = document.createElement('p')
  price.innerHTML = myJson[i].price
  price.style.fontSize = "14px"
  price.style.marginTop = "5px"
  price.style.color = "#c80204"

  let infoContainer = document.createElement('div');
  infoContainer.style.display = "flex";
  infoContainer.style.flexDirection = "column";
  infoContainer.style.marginLeft = "15px"

  infoContainer.appendChild(name);
  infoContainer.appendChild(price);

  cartHot.appendChild(img);
  cartHot.appendChild(infoContainer);
  itemsListHot.appendChild(cartHot);

  cartHot.addEventListener("click", () => {
    addToCart(shirt);
  })
}


// top_footer
let top_footer = document.createElement('div')
let top_footerStyle = {
  with: "100%",
  height: "60px",
  // backgroundColor: "#7FB3D5"
}
Object.assign(top_footer.style, top_footerStyle)

let img_topFooter = document.createElement('img')
img_topFooter.src = "../img/topFooter.png"
img_topFooter.style.width = "60%"
img_topFooter.style.height = "60px"
img_topFooter.style.marginLeft = "100px"
top_footer.appendChild(img_topFooter)


//Footer
let footer = document.createElement('div')
let footerStyle = {
  with: "100%",
  height: "450px",
  // backgroundColor: "#9B59B6"
}
Object.assign(footer.style, footerStyle)

let img_footer = document.createElement('img')
img_footer.src = "../img/footer.png"
img_footer.style.width = "100%"
img_footer.style.height = "450px"
footer.appendChild(img_footer)



// Bottom Footer
let bottom_footer = document.createElement('div')
let bottom_footerStyle = {
  width: "100%",
  height: "200px",
  backgroundColor: "#6E2C00"
}
Object.assign(bottom_footer.style, bottom_footerStyle)

let img_bottomFooter = document.createElement('img')
img_bottomFooter.src = "../img/bottomfooter.png"
img_bottomFooter.style.width = "100%"
img_bottomFooter.style.height = "100%"
bottom_footer.appendChild(img_bottomFooter)








container.appendChild(top_bar)
container.appendChild(nabar)
container.appendChild(bottom_bar)
container.appendChild(main)
container.appendChild(top_footer)
container.appendChild(footer)
container.appendChild(bottom_footer)


