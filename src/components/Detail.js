import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend, selectNewDisney, selectOriginal, selectTrending } from "../features/movie/movieSlice";

function Detail() {
    const { id } = useParams();
    const recommend = useSelector(selectRecommend);
    const newDisney = useSelector(selectNewDisney);
    const original = useSelector(selectOriginal);
    const trending = useSelector(selectTrending);

    const allMovies = [...recommend, ...newDisney, ...original, ...trending];

    const movie = allMovies.find((m) => m.id.toString() === id);

    if (!movie) {
        return <p>Film nicht gefunden...</p>;
    }

    return(
        <Container>
            <Background>
                <img src={movie.image} alt={movie.title} />
            </Background>
            <ImageTitle>
                <h1>{movie.title}</h1>
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    {movie.date ? new Date(movie.date).getFullYear() : "Unbekannt"}
                </SubTitle>
                <Description>
                    {movie.overview}
                </Description>
            </ContentMeta>
        </Container>
    )
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.4;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    
        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 20vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    h1 {
        font-size: 2.5rem;
        max-width: 400px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size; 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
            height: 2px;
            width: 16px;
            transform: translate(1px, 0px) rotate(0deg);
        }

        &:nth-child(2) {
            height: 16px;
            transform: translate(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;

    div {
        height: 40px;
        width; 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;

        img {
            width: 100%;
        }
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export default Detail;