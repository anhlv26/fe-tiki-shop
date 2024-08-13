import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TitleFooter from "~/components/Footer/TitleFooter";
import LinkFooter from "~/components/Footer/LinkFooter";
import { Typography } from "@mui/material";

const Footer = () => {
  const titlesSupport = [
    "Các câu hỏi thường gặp",
    "Gửi yêu cầu hỗ trợ",
    "Hướng dẫn đặt hàng",
    "Phương thức vận chuyển",
    "Chính sách đổi trả",
    "Hướng dẫn trả góp",
    "Chính sách hàng nhập khẩu",
    "Hỗ trợ khách hàng: hotro@tiki.vn",
    "Báo lỗi bảo mật: security@tiki.vn",
  ];
  const aboutTiki = [
    "Giới thiệu Tiki",
    "Tiki Blog",
    "Tiki Blog",
    "Tuyển dụng ",
    "Chính sách bảo mật thanh toán",
    "Chính sách bảo mật thông tin cá nhân",
    "Chính sách giải quyết khiếu nại",
    "Điều khoản sử dụng",
    "Giới thiệu Tiki Xu",
    "Tiếp thị liên kết cùng Tiki",
    "Bán hàng doanh nghiệp",
    "Điều kiện vận chuyển",
  ];
  return (
    <Box sx={{ bgcolor: "#F5F5FA", paddingTop: "16px" }}>
      <Box
        sx={{
          bgcolor: "#fff",
          width: "100%",
          padding: "16px 72px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <TitleFooter>Hỗ trợ khách hàng</TitleFooter>
          {titlesSupport.map((item, index) => (
            <LinkFooter key={index}>{item}</LinkFooter>
          ))}
        </Box>
        <Box>
          <TitleFooter>Về TiKi</TitleFooter>
          {aboutTiki.map((item, index) => (
            <LinkFooter key={index}>{item}</LinkFooter>
          ))}
        </Box>
        <Box>
          <TitleFooter>Hợp tác và liên kết</TitleFooter>
          <LinkFooter>Quy chế hoạt động Sàn GDTMĐT</LinkFooter>
          <LinkFooter>Bán hàng cùng Tiki</LinkFooter>
          <TitleFooter sx={{ marginTop: "24px" }}>Chứng nhận bởi</TitleFooter>
          <Box>
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
              style={{ height: "32px", marginRight: "8px" }}
            />
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
              style={{ height: "32px", marginRight: "8px" }}
            />
            <img
              src="https://images.dmca.com/Badges/dmca_protected_sml_120y.png?ID=388d758c-6722-4245-a2b0-1d2415e70127"
              style={{ height: "32px" }}
            />
          </Box>
        </Box>
        <Box>
          <TitleFooter>Phương thức thanh toán</TitleFooter>
          <Box sx={{ display: "flex", aligItems: "center" }}>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2019-present.jpg"
              style={{ width: "32px", height: "32px", marginRight: "8px" }}
            />
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
              style={{ height: "32px", marginRight: "8px" }}
            />
            <img
              src="https://images.dmca.com/Badges/dmca_protected_sml_120y.png?ID=388d758c-6722-4245-a2b0-1d2415e70127"
              style={{ height: "32px" }}
            />
          </Box>
          <TitleFooter sx={{ marginTop: "24px" }}>
            Dịch vụ giao hàng
          </TitleFooter>
          <Box>
            <img
              src="https://salt.tikicdn.com/ts/upload/74/56/ab/e71563afb23e3f34a148fe1b7d3413c5.png"
              style={{ height: "33px", marginLeft: "-9px" }}
            />
          </Box>
        </Box>
        <Box>
          <TitleFooter>Tải ứng dụng trên điện thoại</TitleFooter>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box sx={{ height: "80px" }}>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
                style={{ height: "80px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-beetween",
              }}
            >
              <Box>
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                  style={{ width: "122px", height: "36px" }}
                />
              </Box>
              <Box>
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                  style={{ width: "122px", height: "36px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "0 72px" }}>
        <Divider />
      </Box>
      <Box sx={{ bgcolor: "#fff", padding: "16px 72px" }}>
        <TitleFooter>Công ty TNHH TIKI</TitleFooter>
        <Typography
          sx={{
            color: "rgb(128, 128, 137)",
            mb: "8px",
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ Chí
          Minh
        </Typography>
        <Typography
          sx={{
            color: "rgb(128, 128, 137)",
            mb: "8px",
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và
          Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
        </Typography>
        <Typography
          sx={{
            color: "rgb(128, 128, 137)",
            mb: "8px",
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Hotline: 1900 6035
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
