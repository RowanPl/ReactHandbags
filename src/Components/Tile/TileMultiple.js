import Tile from "./Tile";
import tileImg1 from "../../assets/brand.png";
import tileImg2 from "../../assets/our_story.png";

function TileMultiple(){
    return(<>
        <Tile  Title={"The brand"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda dolores illo labore natus necessitatibus, non odio quod totam velit</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt eius eveniet ex ipsam laudantium repudiandae sequi, sint soluta.</p>
    </Tile>
    <Tile
        img={tileImg1}
        imgAlt={"our brand"}/>
    <Tile
        img={tileImg2}
        imgAlt={"our story"}/>
    <Tile Title={"our story"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda dolores illo labore natus necessitatibus, non odio quod totam velit</p>
   </Tile>
        </>
    )
}
export default TileMultiple;