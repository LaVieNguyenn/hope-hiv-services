
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Clock, Calendar, FileText, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Dịch vụ y tế và điều trị HIV
            <span className="block text-blue-600 mt-2">Chăm sóc tận tâm, Hy vọng mới</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Chúng tôi cung cấp dịch vụ y tế chuyên nghiệp, điều trị HIV hiệu quả và hỗ trợ toàn diện 
            cho bệnh nhân trong môi trường an toàn, không kỳ thị.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/appointments">
                <Calendar className="mr-2 h-5 w-5" />
                Đặt lịch khám ngay
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/doctors">
                <Users className="mr-2 h-5 w-5" />
                Tìm hiểu về bác sĩ
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dịch vụ chăm sóc toàn diện
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Điều trị HIV chuyên nghiệp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Phác đồ ARV hiện đại, theo dõi CD4 và tải lượng virus chính xác, 
                  điều trị cá nhân hóa cho từng bệnh nhân.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Bảo mật thông tin tuyệt đối</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hệ thống bảo mật cao, tùy chọn ẩn danh, đảm bảo quyền riêng tư 
                  và không có sự kỳ thị trong quá trình điều trị.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Hỗ trợ 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tư vấn trực tuyến, nhắc nhở uống thuốc, lịch tái khám và 
                  hỗ trợ khẩn cấp mọi lúc mọi nơi.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Thành tựu của chúng tôi</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Bệnh nhân được điều trị</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Tỷ lệ kiểm soát tải lượng virus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Bác sĩ chuyên khoa</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Hỗ trợ không ngừng nghỉ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Giáo dục và giảm kỳ thị HIV
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Thông tin chính xác, Giảm bớt lo lắng
              </h3>
              <p className="text-gray-600 mb-6">
                Chúng tôi cung cấp tài liệu giáo dục đầy đủ về HIV/AIDS, cách phòng ngừa, 
                điều trị và sống chung với HIV. Mục tiêu của chúng tôi là xóa bỏ những 
                hiểu lầm và kỳ thị không cần thiết.
              </p>
              <Button asChild variant="outline">
                <Link to="/blog">
                  <FileText className="mr-2 h-4 w-4" />
                  Đọc thêm tài liệu
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hướng dẫn phòng ngừa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Tìm hiểu các biện pháp phòng ngừa HIV hiệu quả và an toàn.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sống khỏe với HIV</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Cách duy trì cuộc sống khỏe mạnh và tích cực khi nhiễm HIV.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Liên hệ với chúng tôi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-blue-400" />
              <div>
                <div className="font-semibold">Hotline 24/7</div>
                <div className="text-gray-300">1900 1234</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-green-400" />
              <div>
                <div className="font-semibold">Địa chỉ</div>
                <div className="text-gray-300">123 Đường ABC, Quận 1, TP.HCM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
