
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Appointments = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Đặt lịch thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong vòng 24h để xác nhận lịch hẹn.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Đặt lịch khám & điều trị HIV
            </h1>
            <p className="text-xl text-gray-600">
              Đặt lịch hẹn với bác sĩ chuyên khoa một cách thuận tiện và bảo mật
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Thông tin đặt lịch</span>
                  </CardTitle>
                  <CardDescription>
                    Vui lòng điền đầy đủ thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Anonymous Option */}
                    <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <Label className="text-sm font-medium">Đặt lịch ẩn danh</Label>
                        <p className="text-xs text-gray-600">
                          Bảo vệ danh tính của bạn trong quá trình đăng ký
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant={isAnonymous ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIsAnonymous(!isAnonymous)}
                      >
                        {isAnonymous ? "Đã bật" : "Bật"}
                      </Button>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">
                          {isAnonymous ? "Tên gọi (không bắt buộc)" : "Họ và tên *"}
                        </Label>
                        <Input
                          id="name"
                          placeholder={isAnonymous ? "Bạn có thể để trống" : "Nhập họ và tên"}
                          required={!isAnonymous}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0901234567"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Appointment Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Ngày khám mong muốn</Label>
                        <Input
                          id="date"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Giờ khám mong muốn</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn giờ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="08:00">08:00 - 09:00</SelectItem>
                            <SelectItem value="09:00">09:00 - 10:00</SelectItem>
                            <SelectItem value="10:00">10:00 - 11:00</SelectItem>
                            <SelectItem value="14:00">14:00 - 15:00</SelectItem>
                            <SelectItem value="15:00">15:00 - 16:00</SelectItem>
                            <SelectItem value="16:00">16:00 - 17:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="doctor">Bác sĩ mong muốn</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn bác sĩ (không bắt buộc)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-nguyen">BS. Nguyễn Văn A - Chuyên khoa HIV</SelectItem>
                          <SelectItem value="dr-tran">BS. Trần Thị B - Chuyên khoa Nội</SelectItem>
                          <SelectItem value="dr-le">BS. Lê Văn C - Chuyên khoa Nhiễm</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="service">Loại dịch vụ</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại dịch vụ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="initial">Khám lần đầu</SelectItem>
                          <SelectItem value="followup">Tái khám</SelectItem>
                          <SelectItem value="consultation">Tư vấn trực tuyến</SelectItem>
                          <SelectItem value="test">Xét nghiệm</SelectItem>
                          <SelectItem value="emergency">Khẩn cấp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="notes">Ghi chú thêm</Label>
                      <Textarea
                        id="notes"
                        placeholder="Mô tả triệu chứng hoặc lý do khám..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Đặt lịch khám
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thông tin quan trọng</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Giờ làm việc</h4>
                      <p className="text-sm text-gray-600">
                        Thứ 2 - Thứ 6: 8:00 - 17:00<br />
                        Thứ 7: 8:00 - 12:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Chuẩn bị trước khám</h4>
                      <p className="text-sm text-gray-600">
                        Mang theo CMND/CCCD, thẻ BHYT (nếu có), và kết quả xét nghiệm gần nhất
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Bảo mật thông tin</h4>
                      <p className="text-sm text-gray-600">
                        Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân và sức khỏe của bạn
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Liên hệ khẩn cấp</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-red-600">Hotline 24/7: 1900 1234</p>
                    <p className="text-sm text-gray-600">
                      Nếu có tình huống khẩn cấp, vui lòng gọi ngay số hotline
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
