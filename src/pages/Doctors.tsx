
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, MapPin, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "BS. Nguyễn Văn A",
      title: "Trưởng khoa HIV/AIDS",
      specialties: ["HIV/AIDS", "Bệnh nhiễm trùng", "Y học dự phòng"],
      experience: "15 năm",
      education: ["Tiến sĩ Y khoa - Đại học Y Hà Nội", "Chứng chỉ HIV/AIDS - WHO"],
      languages: ["Tiếng Việt", "Tiếng Anh"],
      rating: 4.9,
      reviews: 245,
      availability: "Thứ 2, 4, 6 (8:00-17:00)",
      about: "Bác sĩ Nguyễn Văn A có hơn 15 năm kinh nghiệm trong lĩnh vực điều trị HIV/AIDS. Ông đã tham gia nhiều nghiên cứu quốc tế về phác đồ ARV và được đào tạo tại WHO.",
      achievements: ["Bác sĩ xuất sắc năm 2023", "Giải thưởng nghiên cứu HIV 2022"]
    },
    {
      id: 2,
      name: "BS. Trần Thị B",
      title: "Phó trưởng khoa Nội",
      specialties: ["Nội tổng hợp", "HIV/AIDS", "Bệnh gan"],
      experience: "12 năm",
      education: ["Thạc sĩ Y khoa - Đại học Y TP.HCM", "Chuyên khoa I Nội"],
      languages: ["Tiếng Việt", "Tiếng Anh", "Tiếng Pháp"],
      rating: 4.8,
      reviews: 189,
      availability: "Thứ 3, 5, 7 (8:00-12:00)",
      about: "Bác sĩ Trần Thị B chuyên về điều trị HIV ở phụ nữ mang thai và trẻ em. Bà có kinh nghiệm phong phú trong việc tư vấn và hỗ trợ tâm lý cho bệnh nhân.",
      achievements: ["Chuyên gia tư vấn WHO", "Giảng viên trường Đại học Y"]
    },
    {
      id: 3,
      name: "BS. Lê Văn C",
      title: "Bác sĩ chuyên khoa",
      specialties: ["Bệnh nhiễm trùng", "HIV/AIDS", "Y học cộng đồng"],
      experience: "8 năm",
      education: ["Bác sĩ Y khoa - Đại học Y Huế", "Chuyên khoa I Nhiễm"],
      languages: ["Tiếng Việt", "Tiếng Anh"],
      rating: 4.7,
      reviews: 156,
      availability: "Thứ 2, 3, 4, 6 (14:00-17:00)",
      about: "Bác sĩ Lê Văn C tập trung vào việc phòng ngừa và điều trị HIV ở thanh thiếu niên. Anh có cách tiếp cận thân thiện và dễ hiểu với bệnh nhân trẻ tuổi.",
      achievements: ["Bác sĩ trẻ tiêu biểu 2023", "Chuyên gia tư vấn UNICEF"]
    },
    {
      id: 4,
      name: "BS. Phạm Thị D",
      title: "Bác sĩ tâm lý lâm sàng",
      specialties: ["Tâm lý lâm sàng", "Tư vấn HIV", "Hỗ trợ gia đình"],
      experience: "10 năm",
      education: ["Thạc sĩ Tâm lý học - Đại học Quốc gia HN", "Chứng chỉ tư vấn HIV"],
      languages: ["Tiếng Việt", "Tiếng Anh"],
      rating: 4.9,
      reviews: 203,
      availability: "Thứ 2-6 (9:00-16:00)",
      about: "Bác sĩ Phạm Thị D chuyên về hỗ trợ tâm lý cho người sống với HIV và gia đình họ. Bà giúp bệnh nhân vượt qua căng thẳng và xây dựng lối sống tích cực.",
      achievements: ["Chuyên gia tư vấn hàng đầu", "Tác giả sách 'Sống khỏe với HIV'"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Đội ngũ bác sĩ chuyên nghiệp
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các bác sĩ chuyên khoa HIV/AIDS với nhiều năm kinh nghiệm, cam kết mang đến 
              dịch vụ chăm sóc tốt nhất cho bệnh nhân
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <p className="text-gray-600">Bác sĩ chuyên khoa</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <p className="text-gray-600">Năm kinh nghiệm trung bình</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">4.8</div>
                <p className="text-gray-600">Đánh giá trung bình</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <p className="text-gray-600">Hỗ trợ khẩn cấp</p>
              </CardContent>
            </Card>
          </div>

          {/* Doctors Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{doctor.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600 mb-2">
                        {doctor.title}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          {doctor.rating} ({doctor.reviews} đánh giá)
                        </span>
                        <span>{doctor.experience} kinh nghiệm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Giới thiệu</h4>
                    <p className="text-sm text-gray-600">{doctor.about}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Học vấn & Chứng chỉ</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Thành tựu</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {doctor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="mr-2 h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="mr-2 h-4 w-4" />
                        <span className="font-medium">Lịch làm việc</span>
                      </div>
                      <p className="text-gray-600 ml-6">{doctor.availability}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span className="font-medium">Ngôn ngữ</span>
                      </div>
                      <p className="text-gray-600 ml-6">{doctor.languages.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button asChild className="flex-1">
                      <Link to="/appointments">
                        <Calendar className="mr-2 h-4 w-4" />
                        Đặt lịch khám
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Xem chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Quy trình khám bệnh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h4 className="font-medium">Đăng ký khám</h4>
                    <p className="text-sm text-gray-600">Đặt lịch trực tuyến hoặc gọi hotline</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h4 className="font-medium">Tư vấn & khám</h4>
                    <p className="text-sm text-gray-600">Bác sĩ thăm khám và tư vấn chi tiết</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h4 className="font-medium">Xét nghiệm</h4>
                    <p className="text-sm text-gray-600">Thực hiện các xét nghiệm cần thiết</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <div>
                    <h4 className="font-medium">Điều trị & theo dõi</h4>
                    <p className="text-sm text-gray-600">Lập kế hoạch điều trị và theo dõi định kỳ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cam kết của chúng tôi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Chất lượng cao</h4>
                    <p className="text-sm text-gray-600">Đội ngũ bác sĩ được đào tạo bài bản, cập nhật kiến thức liên tục</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Tận tâm chăm sóc</h4>
                    <p className="text-sm text-gray-600">Luôn đặt bệnh nhân làm trung tâm trong mọi hoạt động</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Hỗ trợ 24/7</h4>
                    <p className="text-sm text-gray-600">Sẵn sàng hỗ trợ bệnh nhân mọi lúc khi cần thiết</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
