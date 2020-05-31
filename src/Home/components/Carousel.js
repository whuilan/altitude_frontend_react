import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css'

class MyCarousel extends React.Component{
  render(){
    return (
      <Carousel autoplay effect="fade">
        <div>
          <img alt="高原风光" src="http://inews.gtimg.com/newsapp_bt/0/10567635379/1000/0" />
        </div>
        <div>
          <img alt="高原战士" src="http://n.sinaimg.cn/translate/200/w1080h720/20180822/ZO5v-hhzsnec2897292.jpg"/>
        </div>
        <div>
          <img alt="高原路" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590434616719&di=87ded06472e3369b43fbc2a92031fd7b&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F116%2F283%2F694%2F6cb0c380e6b2470081c85674f7cd80e1.jpg" />
        </div>
      </Carousel>
    )
  }
}

export default MyCarousel;