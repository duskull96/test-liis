import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SlideImg1 from './img/gallery-1.png'
import SlideImg2 from './img/gallery-2.png'
import SlideImg3 from './img/gallery-3.png'
import SlideImg4 from './img/gallery-4.png'

const useStyles = makeStyles({
    container: {
        width: '100%',
        marginBottom: 30,
    },
    slide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 0,
        marginRight: 0,
        '& img': {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    }
})

const Slider = (props) => {
    console.log(props, 'Slider - props');
    const classes = useStyles()
    useEffect(() => {
        if (props.images.images) {
            props.setImages([SlideImg1, SlideImg2, SlideImg3, SlideImg4, SlideImg1, SlideImg2, SlideImg3, SlideImg4])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.images.status])
    return (
        <Swiper
            slidesPerView={3.5}
            spaceBetween={10}
            freeMode={true}
            className={classes.container}
        >
            {
                props.images.images.map((img, id) => {
                    return (
                        <SwiperSlide className={classes.slide} key={Math.floor(Math.random() * 1e10)}>
                            <img src={img} alt={`img-${id + 1}`} />
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default Slider;