import './styles/Body.css'; 
import Vlog from './Vlog';
import Podcast from './Podcast'; 
import Devices from './Devices'; 

function Info() {
  return (
    <div>
        <h2 class="header" style={{fontSize:30, fontFamily: "Readex Pro"}} id="started">
            Trước hết, bạn có thể xây dựng một sự nghiệp và kiếm tiền từ vlog và podcast không?
        </h2>
        <div style={{padding:"0 80px"}}>
            <p>Câu trả lời ngắn là Có.</p>
            <p>Trả lời dài là tất nhiên bạn có thể. Mặc dù là bạn sẽ không nhảy vọt lên thành triệu phú hay tỉ phú ngay lập tức nhưng mà việc thu lợi nhuận từ vlog hay podcast thực chất là một ý tưởng kinh doanh không hề viễn vong chút nào. Có đa dạng cách để bạn tạo ra doanh thu từ mô hình công việc này.</p>
            <p><strong>Quảng cáo:</strong> Đa phần bạn sẽ nhận được không ít cơ hội từ những nền tảng bạn sử dụng để quảng cáo cho các sản phẩm ở bên thứ ba. Mỗi khi có người nhấn vào quảng cáo trên video của bạn thì bạn sẽ nhận một khoản tiền nhỏ. Tuy nhiên thì trừ khi nào bạn có một lượng người xem hùng hậu thì số tiền này gần như không đáng kể.</p>
            <p><strong>Tài trợ:</strong> Những việc này thường xảy ra dưới hình thức một công ty, hoặc bạn trực tiếp liên hệ hoặc họ chủ động tìm đến bạn, trả bạn một số tiền để nhắc đến tên nhãn hàng và các sản phẩm của họ trong video của bạn. Hay là bạn sẽ giới thiệu tới người xem một đường link riêng của mình được công ty đó cấp và khi khán giả của bạn truy cập mua hàng thông qua đó thì bạn sẽ nhận được một số tiền hoa hồng nho nhỏ.</p>
            <p><strong>Hội viên và tiền ủng hộ (subscription and donation):</strong> Bạn có thể sẽ được nhận được hỗ trợ tài chính từ người xem và tiền hội viên theo tháng hoặc theo mỗi video bạn sản xuất ra. Patreon, Paypal hay Youtube Memberships,... là những ví dụ điển hình của hình thức này. Dựa vào số tiền mà một người xem hỗ trợ, bạn có thể cho họ những đặc ân riêng biệt như stickers, emojis hay những nội dung (content) độc quyền mà chỉ những người này có thể truy cập, thậm chí kể cả những buổi gặp mặt định kỳ với những fan đã chi ra số tiền đáng kể cho bạn.</p>
            <p><strong>Hàng hóa, sản phẩm (Merchandise):</strong> Nếu bạn đã xây dựng được cho mình một lượng người xem trung thành đến mức họ sẵn lòng mang những thứ liên quan đến bạn lên người thì còn gì phải ngại khi bạn vừa có thể chiều lòng fan vừa có thể thu lợi nhuận. Mở một cửa hàng online, thuê vài người sản xuất, quản lý hàng hóa và hậu cần thì bạn sẽ có được cho mình một thương hiệu, từ đó bạn có thể thiết kế nên những thứ mang logo hay câu nói, thậm chí là gương mặt mình từ quần áo, giày đến cốc, đồng hồ,... cuối cùng chỉ đơn giản là việc bạn thông báo cho người xem của mình rằng họ có thể mua những thứ này.</p>
        </div>
        <Vlog />
        <Podcast />
        <Devices />
    </div>
  );
}

export default Info;
