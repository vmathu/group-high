import '../styles/Body.css'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import RazerMic from '../assets/https___hybrismediaprod.blob.core.windows.net_sys-master-phoenix-images-container_h9a_hd0_9079776083998_seiren-x-black-gallery-1500x1000-01.jpg'; 
import RodeMic from '../assets/01.jpg'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    cursor: "pointer", 
    justifyContent: 'space-between', 
    "& .MuiTypography-root": {
      fontFamily: "Readex Pro !important"
    }, 
    "&:hover":{
      filter: "drop-shadow(0px 10px 20px rgba(38, 50, 56, 0.16)) drop-shadow(0px 4px 8px rgba(38, 50, 56, 0.08))", 
      transform: "scale(1.05)"
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "10vw",
  }, 
  paragraph: {
    padding: '0 20px', 
    textAlign: 'justify', 
    [theme.breakpoints.up('sm')]: {
      padding: '0 80px'
    }
  }, 
  card: {
    display: "flex", 
    justifyContent: "space-evenly", 
    [theme.breakpoints.down('sm')]: {
      display: 'grid', 
    }, 
    [theme.breakpoints.up('sm')]: {
      margin: '3em 0'
    }
  }
}));

function Devices() {
  const classes = useStyles();
  const theme = useTheme();

  const devices = [
    {
      name: 'Razer Seirēn X - Black', 
      features: ['Ultra-Precise Pickup Pattern', 'Shock Resistant', 'Compact From Factor'], 
      img: RazerMic
    }, 
    {
      name: 'Rode Wireless Microphone', 
      features: ['Small Package. Big Result', 'Professional Sound. Easy to Use', 'All-In-One For Run ‘n’ Gun'], 
      img: RodeMic
    }
  ]
  return (
    <div id="devices">
        <h2 class="header" style={{fontSize:28}}>
            Những thiết bị và ứng dụng cần thiết để có thể quay vlog hoặc podcast
        </h2>
        <div className={classes.paragraph}>
            <p><strong>Thiết bị ghi âm:</strong> Bạn sẽ cần một chiếc microphone tốt, có khả năng thu được giọng nói của bạn một cách rõ ràng, cũng như không làm thay đổi quá nhiều chất giọng vốn có của bạn để người nghe có thể nghe được một cách lôi cuốn nhất Thường thì bạn có thể có mua được những chiếc microphone tốt như vậy với mức giá từ 1 triệu trở lên, những chiếc microphone khá tốt tiêu biểu có thể kể đến như Razer Seiren (khoảng giá 1,5tr), Sony XLR-K3M (khoảng giá 4tr) hoặc nếu bạn vừa hướng đến sự chuyên nghiệp và cả sự linh hoạt, tiện dụng thì bạn sẽ có một ứng cử viên tiềm năng là Rode Wireless Microphone trong tầm giá 7 triệu.</p>
            <div className={classes.card}>
              {devices.map((device)=> (
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component='h5' variant='h5'>
                        {device.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        <ul>
                          {device.features.map((feature) => (
                            <li>{feature}</li>
                          ))}
                        </ul>
                      </Typography>
                    </CardContent>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={device.img}
                    title={device.name}
                  >
                  </CardMedia>
                </Card>
              ))}
            </div>
            <p><strong>Một chiếc camera:</strong> Hiện nay thì thật ra đã có rất nhiều loại camera của điện thoại có thể phục vụ tốt cho việc quay video của bạn rồi. Nhưng nếu bạn muốn có một chất lượng hình ảnh trong tầm tốt nhất, với màu sắc lung linh hoặc các tính năng chống rung cao cấp thì bạn nên mua thêm camera rời. Trong làng camera rời phục vụ quay vlog,... thì không thể không kể đến anh lớn GoPro. Bạn chỉ cần bỏ ra từ 5-6tr là đã có thể có một chiếc GoPro Hero 6 để có thể quay video với độ phân giải 4K với 30 khung hình trên 1 giây, nổi bật nhất của dòng GoPro là tính năng hỗ trợ chống rung vô cùng tuyệt vời để bạn có thể thực hiện việc quay video gần như là ở bất cứ đâu.</p>
            <p><strong>Một chiếc thẻ nhớ hoặc ổ cứng đủ lớn để lưu trữ những nguyên vật liệu phục vụ tạo nên sản phẩm của bạn:</strong> Trong mảng này này có rất nhiều lựa chọn, bạn hãy chọn cái phù hợp nhất với nhu cầu.</p>
            <p><strong>Những phần mềm chỉnh sửa âm thanh (autotune):</strong> Bạn có thể sử dụng Adobe Premiere, Canva, Final Cut, v.v, mảng này thì cũng có vô vàn sự lựa chọn dành cho bạn</p>
        </div>
    </div>
  );
}

export default Devices;