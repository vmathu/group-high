//@material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 

import MinhKhoi from '../assets/MinhKhoi.jpg'; 
import HuuPhuc from '../assets/HuuPhuc.jpg'; 
import AnPhong from '../assets/AnPhong.png';
import AnhKhoi from '../assets/PhanKhoi.png';
import AnhThu from '../assets/unnamed.png'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "-webkit-fill-available", 
    "& .MuiButtonBase-root": {
      transition: "transform .5s", 
      "&::after": {
        position: "absolute", 
        top: 0,
        left: 0,
        width: "100%", 
        height: "100%", 
        transition: "opacity 2s cubic-bezier(.165, .84, .44, 1)", 
        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15)", 
        opacity: 0, 
        zIndex: -1
      }, 
      "&:hover": {
        transform: "scale3d(1.006, 1.006, 1)", 
        "&::after": {
          opacity: 1, 
        }, 
        background: "none", 
        color: "black", 
      }, 
      "&:focus": {
        transform: "scale3d(1.006, 1.006, 1)", 
        "&::after": {
          opacity: 1
        }
      }
    }, 
    "&:hover":{
      filter: "drop-shadow(0px 10px 20px rgba(38, 50, 56, 0.16)) drop-shadow(0px 4px 8px rgba(38, 50, 56, 0.08))", 
      transform: "scale(1.05)"
    }, 
    "& .MuiCardMedia-root": {
      backgroundPosition: "inherit"
    }, 
    "& .MuiTypography-root": {
      fontFamily: "Readex Pro !important"
    }
  },
  media: {
    height: 300,
  },
  grid: {
    justifyContent: 'center', 
    textAlign: '-webkit-center'
  }
});

function AboutUs() {
  const classes = useStyles();

  const members = [
    {
      img: MinhKhoi, 
      name: 'Nguyễn Minh Khôi', 
      info: 'MSSV: 21127081 - Scrum Master'
    }, 
    {
      img: HuuPhuc, 
      name: 'Diệp Hữu Phúc', 
      info: 'MSSV: 21127135 - Developer'
    }, 
    {
      img: AnPhong, 
      name: 'Trần Nguyễn An Phong', 
      info: 'MSSV: 21127004 - Content Writer'
    }, 
    {
      img: AnhKhoi, 
      name: 'Phan Đặng Anh Khôi', 
      info: 'MSSV: 21127325 - Content Writer', 
    }, 
    {
      img: AnhThu, 
      name: 'Võ Minh Anh Thư', 
      info: 'MSSV: 21127446 - Developer'
    }
  ]
  return (
    <Grid container spacing={3} className={classes.grid}>
      {members.map((member) => (
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={member.img}
                title={member.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {member.info}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default AboutUs;
