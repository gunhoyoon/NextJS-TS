import Link from "next/link";
import React, { useRef } from "react";
import { FC } from "react";
import { Grid } from "semantic-ui-react";
import { DosmeticItem, DosmeticItems } from "../../model/dosmeticProduct";
import styles from "./ItemList.module.css";

interface Props {
  list: DosmeticItems;
}

const ItemList: FC<Props> = ({ list }) => {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row
          style={{
            display: "flex",
            flexWrap: "Wrap", // 위스를 100%초과하면 자동으로 줄내림 처리
            justifyContent: "center",
            flexGrow: 1, // Grid.Row 가로 한줄을 나타내는거고 그 안에서 적용할 css들을 작성해줌 map할거니까 전부 적용된 상태로 나옴
          }}
        >
          {list.map((item: DosmeticItem) => (
            <Grid.Column
              key={item.id} // map을 돌렸으니 각자의 고유 id값이 주어짐
              style={{ width: "33%", textAlign: "center" }} // 여기서의 Grid.Column은 한칸한칸의 item들임 각각 고유 key값도 줬음 css도 각각 하나의 item에게 적용됨
            >
              <Link href={`/view/${item.id}`}>
                {/* 각 고유의 item의 id로 상세페이지까지 고려를 해서 만들어진거임 */}
                <a>
                  {""}
                  <div>
                    <img
                      style={{ width: 200 }}
                      src={item.image_link}
                      alt="logo"
                    />
                    <strong className={styles.item_name}>{item.name}</strong>
                    {/* className은 모듈 css에서 strong적용 시 필요 */}
                    {/* {item.name}은 모델링에서 타입정의한 속성중 하나 각각의 item들이 들어가는 부분 */}
                    <a href="">
                      <div className={styles.item_common_style}></div>
                    </a>
                    <span>{item.price}</span>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;

// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/488/original/open-uri20171223-4-deo82c?1514063329"
// brand: "maybelline"
// category: null
// created_at: "2016-10-01T18:36:05.584Z"
// currency: null
// description: "Why You'll Love It\n\nLightweight pigments blend easily and wear evenly\nProvides a natural, fade-proof bronzed color that leaves skin the way it was meant to be...fresh, breathing and natural\n\nFor Best Results: For soft, natural look, brush along cheekbone, sweeping upward."
// id: 488
// image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png"
// name: "Maybelline Fit Me Bronzer"
// price: "10.29"
// price_sign: null
// product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/488.json"
// product_colors: [{…}]
// product_link: "https://well.ca/products/maybelline-fit-me-bronzer_31265.html"
// product_type: "bronzer"
// rating: 4.5
// tag_list: []
// updated_at: "2017-12-23T21:08:49.985Z"
// website_link: "https://well.ca"
