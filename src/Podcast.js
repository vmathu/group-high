import './styles/Body.css'; 
import podcastImg from './assets/naive-style-podcast-stickers-set_52683-77893.png'
import YouTubeIcon from '@material-ui/icons/YouTube';

function Podcast() {
  return (
    <div>
        <h2 class="header" id="podcast">
          Podcast 
        </h2>
        <div class="paragraph">
          <div style={{display: "flex"}}>
            <div>
              <h3>Để làm podcast ta cần gì ?</h3>
              <p>Một giọng nói tốt (truyền cảm) - luyện giọng, tìm phong cách nói phù hợp cho bản thân mình. Trước hết phải luyện để giọng nói có chiều sâu, hãy tập luyện cách lấy hơi ra từ bụng. Thực hiện cách lấy hơi từ bụng sẽ giúp âm thanh của bạn phát ra tiếng sâu hơn, mềm mại và trầm ấm. Tốc độ nói cũng là một trong những yếu tố quan trọng giúp giọng đọc tốt hơn. Hãy thực hiện phương pháp “nhả” chữ vừa phải khi nói. Không nên nói quá nhanh làm người nghe chưa kịp tiếp nhận thông tin và cũng không nên nói quá chậm, sẽ khiến người nghe cảm thấy nhàm chán, gây cảm giác buồn ngủ, dẫn đến cuộc nói chuyện kém hiệu quả. Vì vậy, bạn hãy điều chỉnh tốc độ nói vừa phải trong khoảng từ 125 từ/ phút. </p>
              <p>Kiểm soát hơi thở nhịp nhàng, nên tạo ngữ điệu và cách nhấn nhá trong mỗi câu nói phát ra. Cách đơn giản nhất để luyện tập điều này là lắng nghe cách nói chuyện của những người có giọng nói truyền cảm để bắt chước theo. Ngoài ra, bạn còn có thể học cách kiểm soát hơi thở thông qua các kỹ thuật đơn giản ngay tại nhà. Đó chính là tập luyện hơi thở 4-5 lần trên một ngày, mỗi ngày 10-15 phút, tranh thủ mọi lúc, mọi nơi và ở trong bất cứ hoàn cảnh nào. Chỉ cần kiên trì tập luyện, bạn sẽ sớm đạt được kết quả về giọng nói như mong muốn. </p>
              <p>Đọc sách, báo, các biển quảng cáo trên đường,... bất kì thứ gì có chữ để nâng cao khả năng đọc truyền cảm của bạn, kết hợp cảm xúc phù hợp với từng loại thông tin khác nhau.</p>
            </div>
            <div style={{alignSelf: "center"}}>
              <img src={podcastImg} alt="podcastImg" style={{ width: "25em", paddingLeft: "2em" }}
              />
            </div>
          </div>
          <h3>Làm sao để xây dựng podcast từ con số 0 ?</h3>
          <h4>Xác định chủ đề chính và đối tượng nghe podcast của bạn</h4>
          <p>Bạn phải xác định được bạn sẽ là ai? Một nhà báo thời sự hay một nhà kinh tế học,... Từ đó bạn vạch ra được rõ ràng rằng kênh podcast của bạn sẽ cung cấp những thông tin gì cho người nghe. Từ đó phát triển và vận hành kênh podcast của bạn theo đúng hướng đã định.</p>
          <h4>Xác định nội dung của từng giai đoạn</h4>
          <p>Có những thể loại nội dung mà người nghe chỉ muốn nghe từ một đối tượng cụ thể nào đó. Ví dụ như những vấn đề nghiêm trọng của xã hội như sụp đổ kinh tế, bán khống trái phiếu,... thì người nghe thường chỉ chọn nghe từ những podcaster uy tín và có tiếng. Rất ít ai sẽ đi tham khảo những nội dung quan trọng này từ những podcaster mới tập tành. Ngược lại với những nội dung mang tính cơ sở, hay còn gọi là người mới bắt đầu thì người nghe có thể chọn nghe từ hầu như bất kì podcaster nào. Và nếu bạn có một sức hút đủ hoặc nội dung của bạn chính xác và dễ hiểu thì bạn sẽ có được một lượng khán giả nhất định cho kênh. Vì vậy bằng việc xác định rõ nội dung cho từng giai đoạn, bạn sẽ có thể phát triển kênh của bạn một cách logic và hợp lý, cũng như sẽ tạo dựng nền móng và lượng khán giả cho kênh.</p>
          <h4>Viết kịch bản cho mỗi buổi</h4>
          <p> Khác với việc chỉ là một người có kinh nghiệm trong ngành, trở thành một podcaster nghĩa là bạn còn phải chia sẻ kinh nghiệm và kiến thức của bạn với người khác. Và hành động này phải được thực hiện với một sự chính xác nhất định và giảm thiểu sai sót nhiều mất có thể. Nên không phải giống như việc thảo luận với người khác ở trường hay quán cafe, mà việc làm podcaster giống với trở thành một giáo viên chỉ dạy cho người khác hơn. Vì vậy trước khi thực hiện việc này, bạn phải chuẩn bị chu đáo “giáo trình” của mình và duyệt qua kĩ càng nội dung sắp nói.</p>
          <h4>Quay và thu âm</h4>
          <p>Sau khi đã chuẩn bị kĩ về mặt nội dung, tiếp theo là các yếu tố về mặt hình thức. Nếu bạn chọn thể loại podcast có hình thì hình ảnh của bạn khi quay hình lên podcast phải chỉnh chu, phải có sự tôn trọng dành cho người nghe và thể hiện được sự nghiêm túc của công việc. Còn về mặt thu âm thì giọng nói của bạn nên rõ ràng và nên được lọc kỹ các tạp âm. Việc có các tạp âm ồn ào trong podcast của bạn là điều tối kỵ nhất với các podcaster vì nó không chỉ làm giảm đi chất lượng của nội dung bạn thực hiện mà nó còn gây nên sự khó chịu với người nghe. Tổng hợp lại, trước tiên để trở thành một podcaster bạn nên đầu tư một chất lượng hình ảnh và âm thanh ở mức cơ sở (tức là ở cái mức mà người xem không có vấn đề gì với hình ảnh và âm thanh). Sau đó thì việc chọn nâng cấp hơn hay không sẽ phụ thuộc vào độ tăng trưởng của kênh hoặc khả năng của bạn.</p>
          <h4>Đưa video lên nhiều nền tảng (Spotify, Soundcloud, Youtube...)</h4>
	        <p>Cuối cùng khi podcast  của bạn đã hoàn thành và chỉnh chu nhất thì bạn chỉ còn phải ra mắt nó với công chúng thôi. Tuy nhiên, đối với podcast thì bạn sẽ được rộng rãi hơn trong việc chọn nền tảng của mình tùy vào việc podcast của bạn có quan trọng cả phần tiếng lẫn hình ảnh hay mỗi âm thanh thôi. Do đó bạn có thể chọn cả những nền tảng chia sẻ âm nhạc lẫn video để công khai sản phẩm của mình như Youtube, Spotify, Soundcloud, TikTok,... Sau đó thì là xong, bạn có thể chọn ngồi chờ cho video của mình được các thuật toán quảng cáo chạm đến, hoặc bạn có thể tiến 1 bước xa hơn thế nữa, đó chính là chủ động quảng bá cho vlog của mình bằng nhiều cách khác nhau.</p>
          
        </div>
    </div>
  );
}

export default Podcast;