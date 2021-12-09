import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { firestore } from "../../lib/firebase";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export default function Details(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    },
  });

  return (
    <>
      <GridContainer>
        <ApplicationSumpleContainer>
          <NavigationWrapper>
            <div ref={sliderRef} className="keen-slider">
              {props.details.samples.map((sampleURL) => {
                return (
                  <div className="keen-slider__slide" key={sampleURL}>
                    <Image
                      src={sampleURL}
                      alt={"this is pinplage Image"}
                      width={400}
                      height={867}
                      priority={true}
                      loading="eager"
                      objectFit={"contain"}
                    ></Image>
                  </div>
                );
              })}
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </NavigationWrapper>
          {loaded && instanceRef.current && (
            <Dots>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </Dots>
          )}
        </ApplicationSumpleContainer>

        <DetailsContainer>
          <Title>{props.details.title}</Title>

          <Content>
            <SubTitle>説明</SubTitle>
            <ExplainContainer>
              <p>{props.details.explain}</p>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>使用技術</SubTitle>
            <ExplainContainer>
              <ul>
                {props.details.used_tech.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>自分がやったこと</SubTitle>
            <ExplainContainer>
              <ul>
                {props.details.what_I_did.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>思い出話</SubTitle>
            <ExplainContainer>
              <p>{props.details.memories}</p>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>github</SubTitle>
            <ExplainContainer>
              <a
                href={props.details.links.github}
                target="_blank"
                rel="noreferrer"
              >
                {props.details.links.github}
              </a>
            </ExplainContainer>
          </Content>
          {props.details.links.youtube && (
            <Content>
              <SubTitle>YouTube</SubTitle>
              <ExplainContainer>
                <a
                  href={props.details.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.details.links.youtube}
                </a>
              </ExplainContainer>
            </Content>
          )}
        </DetailsContainer>
      </GridContainer>
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export const getStaticPaths = async () => {
  const ref = collection(firestore, "works");
  const snap = await getDocs(ref);
  const ids = snap.docs.map((doc) => doc.id);
  const paths = ids.map((id) => `/works/${id}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let details;
  const docRef = doc(firestore, `works/${params.details}/details/info`);
  const snap = await getDoc(docRef);
  details = snap.data();
  details.title = params.details;

  return {
    props: { details },
  };
};

const GridContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    height: 90vh;
    grid-template-columns: 3fr 5fr;
  }
`;

const ApplicationSumpleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  .keen-slider {
    width: 250px;
    height: 542px;
    @media screen and (min-width: 1024px) {
      max-width: 300px;
      width: 300px;
      height: 650.25px;
    }
  }
`;

const DetailsContainer = styled.div`
  @media screen and (min-width: 1024px) {
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #50dada;
    border-radius: 100px;
  }
  font-size: 4px;
  padding: 5em;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: #00cccc; ;
`;

const SubTitle = styled.h2`
  font-size: 6rem;
  color: #00cccc; ;
`;

const Content = styled.div`
  margin: 4em;
`;

const ExplainContainer = styled.div`
  border-left: 2px solid #00cccc;
  padding: 2.5em;
  p {
    font-size: 4em;
    color: #4e4e4e;
  }
  ul {
    padding: 0;
    list-style-type: none;
    li {
      font-size: 4em;
      color: #4e4e4e;
    }
  }
  a {
    font-size: 4em;
    color: blue;
  }
`;

const NavigationWrapper = styled.div`
  position: relative;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }
  .dot.active {
    background: #01dada;
  }
`;
