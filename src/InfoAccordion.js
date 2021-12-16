import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    "& .MuiAccordionSummary-root": {
      background: "#ffeaa785"
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Quảng cáo</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đa phần bạn sẽ nhận được không ít cơ hội từ những nền tảng bạn sử dụng để quảng cáo cho các sản phẩm ở bên thứ ba. Mỗi khi có người nhấn vào quảng cáo trên video của bạn thì bạn sẽ nhận một khoản tiền nhỏ. Tuy nhiên thì trừ khi nào bạn có một lượng người xem hùng hậu thì số tiền này gần như không đáng kể.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Tài trợ</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Những việc này thường xảy ra dưới hình thức một công ty, hoặc bạn trực tiếp liên hệ hoặc họ chủ động tìm đến bạn, trả bạn một số tiền để nhắc đến tên nhãn hàng và các sản phẩm của họ trong video của bạn. Hay là bạn sẽ giới thiệu tới người xem một đường link riêng của mình được công ty đó cấp và khi khán giả của bạn truy cập mua hàng thông qua đó thì bạn sẽ nhận được một số tiền hoa hồng nho nhỏ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Hội viên và tiền ủng hộ (subscription and donation)</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bạn có thể sẽ được nhận được hỗ trợ tài chính từ người xem và tiền hội viên theo tháng hoặc theo mỗi video bạn sản xuất ra. Patreon, Paypal hay Youtube Memberships,... là những ví dụ điển hình của hình thức này. Dựa vào số tiền mà một người xem hỗ trợ, bạn có thể cho họ những đặc ân riêng biệt như stickers, emojis hay những nội dung (content) độc quyền mà chỉ những người này có thể truy cập, thậm chí kể cả những buổi gặp mặt định kỳ với những fan đã chi ra số tiền đáng kể cho bạn.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Hàng hóa, sản phẩm (Merchandise)</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nếu bạn đã xây dựng được cho mình một lượng người xem trung thành đến mức họ sẵn lòng mang những thứ liên quan đến bạn lên người thì còn gì phải ngại khi bạn vừa có thể chiều lòng fan vừa có thể thu lợi nhuận. Mở một cửa hàng online, thuê vài người sản xuất, quản lý hàng hóa và hậu cần thì bạn sẽ có được cho mình một thương hiệu, từ đó bạn có thể thiết kế nên những thứ mang logo hay câu nói, thậm chí là gương mặt mình từ quần áo, giày đến cốc, đồng hồ,... cuối cùng chỉ đơn giản là việc bạn thông báo cho người xem của mình rằng họ có thể mua những thứ này.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
