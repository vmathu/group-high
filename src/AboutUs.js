import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MinhKhoi from './assets/MinhKhoi.jpg'; 
import HuuPhuc from './assets/HuuPhuc.jpg'; 
import AnPhong from './assets/AnPhong.png';
import AnhKhoi from './assets/PhanKhoi.png';
import AnhThu from './assets/unnamed.png'; 

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
      filter: "drop-shadow(0px 10px 20px rgba(38, 50, 56, 0.16)) drop-shadow(0px 4px 8px rgba(38, 50, 56, 0.08))"
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
});

function AboutUs() {
  const classes = useStyles();
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={MinhKhoi}
              title="MinhKhoi"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Nguyễn Minh Khôi
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                MSSV: 21127081
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={HuuPhuc}
              title="HuuPhuc"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Diệp Hữu Phúc
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                MSSV: 21127135
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={AnPhong}
              title="AnPhong"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Trần Nguyễn An Phong
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                MSSV: 21127004
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "3em"}}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={AnhKhoi}
              title="AnhKhoi"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Phan Đặng Anh Khôi
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                MSSV: 21127325
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={AnhThu}
              title="AnhThu"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Võ Minh Anh Thư
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                MSSV: 21127446
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;
