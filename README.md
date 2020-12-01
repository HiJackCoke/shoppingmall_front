# Tonist ShoppingMall Project

## Introduction

## DEMO Screen & Video

## Features / Implemented

### Register

 - [x] User Register 후에 history.push 를 이용해 자동으로 Login Page 이동
 
<img src="https://user-images.githubusercontent.com/54699548/100687293-5c977080-33c3-11eb-8dee-ef75c5cdddc4.gif"/>

### Log In

 - [x] User Log In 후에 history.push 를 이용해 Home Page 이동
 
<img src="https://user-images.githubusercontent.com/54699548/100687152-1a6e2f00-33c3-11eb-9ff3-a5d2a61c0217.gif"/>

### Home Page
 
 - [x] Mouse Point를 이미지에 가져다 놓았을때 Image Change
 - [x] Main Slide : Image Slide에 Fade Effect
 - [x] Sub Slide : Pagination, Navigation 적용

<img src="https://user-images.githubusercontent.com/54699548/100687634-fc54fe80-33c3-11eb-8e31-2f1572849b23.gif" />

### Product Page

 - ImageGallery
 - [x] Tooltip을 이용한 확대이미지 적용
 - [x] Swiper Controller을 적용해 Main Swiper 와 Thumbnail control 연결 
 
 - Description
 - [x] useState, onClick을 사용해 상태값 변경
 - [x] Color 선택 -> Size Menu True
 - [x] Size 선택 -> Cart Button True, Send Data to OrderBox (Color, Size, Quantity, Price)
 
<img src="https://user-images.githubusercontent.com/54699548/100687816-5b1a7800-33c4-11eb-9dfc-bdb3df8760e8.gif" />

### Wishlist

 - [x] Redux 사용, Product의 Wishlist Button을 눌렀을때 Header Wishlist Icon 과 Wishlist Page에 Product(name)를 담는다
 - [x] Heart 와 HeartEmpty로 Wishlist에 담겨있는지 체크, 담겨있지 않다면 Product를 담고, 담겨 있다면, Wishlist에서 Product를 Delete

<img src="https://user-images.githubusercontent.com/54699548/100688169-075c5e80-33c5-11eb-993a-f36621cefe0d.gif" />

### Cart

 - [x] Redux 사용, Product의 Cart Button을 눌렀을때 Header Cart Icon 과 Cart Page에 Product(name, color, size, quantity, price)를 담는다
 - [x] Product의 Size (Size 상태는 Color를 선택했을때 True) 를 선택했을때 Cart Button이 나오게 함으로써 Color 와 Size를 필수로 담게 설정

<img src="https://user-images.githubusercontent.com/54699548/100688066-d2e8a280-33c4-11eb-84e6-271472d242f4.gif" />


 - Use Skills
- [x] Hook (useState, useEffect, useParams)
- [x] redux
- [x] Axios CRUD
- [x] Upgrade Back-End (with GraphQL)
- [x] Deploy website
- [x] Add Docker 

 - To Do List

 - Check Out


