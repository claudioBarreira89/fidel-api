import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import { StyledLazyLoader } from "./styles";

interface ILazyLoader {
    isLoading?: boolean;
    getData: () => void;
}

let timer;

const LazyLoader: React.FunctionComponent<ILazyLoader> = ({
    isLoading,
    getData
}) => {
    const ref = React.useRef<HTMLHeadingElement>();
    const [inView, setInvIew] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", isInViewPort);
    }, []);

    useEffect(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (inView) {
                getData();
            }
        }, 250);
    }, [inView]);

    useEffect(
        () => () => {
            document.removeEventListener("scroll", isInViewPort);
        },
        []
    );

    const isInViewPort = () => {
        if (!ref.current) return;
        const bounding =
            ref.current.getBoundingClientRect &&
            ref.current.getBoundingClientRect();

        if (bounding.bottom <= window.innerHeight) {
            setInvIew(true);
        } else {
            setInvIew(false);
        }
    };

    return (
        <div ref={ref}>
            <StyledLazyLoader>
                {isLoading ? (
                    <Loader active inline size="small" />
                ) : (
                    <div className="loadMore">Load more</div>
                )}
            </StyledLazyLoader>
        </div>
    );
};

export default LazyLoader;
