SET NAMES UTF8;
DROP DATABASE IF EXISTS bk;
CREATE DATABASE bk CHARSET=UTF8;
USE bk;
-- 首页商品
CREATE TABLE bk_index(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64)
);
-- /****首页轮播广告商品****/
CREATE TABLE bk_index_carousel(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
-- CREATE TABLE product(
--   cid INT  PRIMARY KEY AUTO_INCREMENT ,
--   title VARCHAR(64),
--   img VARCHAR(128)
-- )
-- CREATE TABLE category(
--   did INT PRIMARY KEY AUTO_INCREMENT,
--   img VARCHAR(128),
--   href VARCHAR(128),
--   title VARCHAR(64),
-- )
INSERT INTO bk_index VALUES
(NULL,"博开窗帘真的好，不跟你玩虚的"),
(NULL,"高逼格空间"),
(NULL,"就爱上咖啡撒");
INSERT INTO bk_index_carousel VALUES
(NULL,"1/9.jpg","轮播广告商品1","product_details.html?lid=28"),
(NULL, '1/9.jpg','轮播广告商品2','product_details.html?lid=19'),
(NULL, '1/9.jpg','轮播广告商品3','lookforward.html'),
(NULL, '1/9.jpg','轮播广告商品4','lookforward.html');
-- INSERT INTO product VALUES
-- ()