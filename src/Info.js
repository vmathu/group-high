import React from 'react';
import './styles/Body.css'; 
import Vlog from './Vlog';
import Podcast from './Podcast'; 
import Devices from './Devices'; 
import InfoAccordion from './InfoAccordion'; 

function Info() {
  return (
    <div>
        <h2 class="header" style={{fontSize:30}} id="started">
            Trước hết, bạn có thể xây dựng một sự nghiệp và kiếm tiền từ vlog và podcast không?
        </h2>
        <div class="paragraph">
            <p>Câu trả lời ngắn là Có.</p>
            <p>Trả lời dài là tất nhiên bạn có thể. Mặc dù là bạn sẽ không nhảy vọt lên thành triệu phú hay tỉ phú ngay lập tức nhưng mà việc thu lợi nhuận từ vlog hay podcast thực chất là một ý tưởng kinh doanh không hề viễn vong chút nào. Có đa dạng cách để bạn tạo ra doanh thu từ mô hình công việc này.</p>
            <InfoAccordion />
        </div>
        <Vlog /> 
        <Podcast />
        <Devices />
    </div>
  );
}

export default Info;
