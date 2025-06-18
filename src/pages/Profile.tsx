
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  Bell, 
  Shield, 
  Calendar, 
  FileText, 
  Settings,
  Phone,
  Mail,
  MapPin,
  Edit,
  Save
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Cập nhật thành công!",
      description: "Thông tin hồ sơ của bạn đã được lưu.",
    });
  };

  const userInfo = {
    name: "Nguyễn Văn A",
    patientId: "BN001234",
    phone: "0901234567",
    email: "nguyenvana@email.com",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    dateOfBirth: "1985-05-15",
    emergencyContact: "0987654321",
    emergencyName: "Nguyễn Thị B",
    startDate: "2024-04-15"
  };

  const appointments = [
    { date: "2024-06-20", time: "09:00", doctor: "BS. Nguyễn Văn A", type: "Tái khám", status: "confirmed" },
    { date: "2024-07-15", time: "14:00", doctor: "BS. Trần Thị B", type: "Xét nghiệm", status: "pending" },
    { date: "2024-05-15", time: "10:30", doctor: "BS. Nguyễn Văn A", type: "Tái khám", status: "completed" },
  ];

  const medications = [
    { name: "TDF + 3TC + DTG", dosage: "1 viên/ngày", time: "20:00", started: "2024-04-15" },
  ];

  const testResults = [
    { date: "2024-06-15", test: "CD4", result: "520 cells/μL", status: "normal" },
    { date: "2024-06-15", test: "Viral Load", result: "< 50 copies/mL", status: "undetectable" },
    { date: "2024-05-15", test: "CD4", result: "485 cells/μL", status: "normal" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Hồ sơ cá nhân</h1>
              <p className="text-gray-600">Quản lý thông tin cá nhân và theo dõi quá trình điều trị</p>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "default" : "outline"}
            >
              {isEditing ? (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Lưu thay đổi
                </>
              ) : (
                <>
                  <Edit className="mr-2 h-4 w-4" />
                  Chỉnh sửa
                </>
              )}
            </Button>
          </div>

          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="personal">Thông tin cá nhân</TabsTrigger>
              <TabsTrigger value="appointments">Lịch hẹn</TabsTrigger>
              <TabsTrigger value="medications">Thuốc điều trị</TabsTrigger>
              <TabsTrigger value="tests">Kết quả xét nghiệm</TabsTrigger>
              <TabsTrigger value="settings">Cài đặt</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-blue-600" />
                      <span>Thông tin cá nhân</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Họ và tên</Label>
                        <Input
                          id="name"
                          defaultValue={userInfo.name}
                          readOnly={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="patientId">Mã bệnh nhân</Label>
                        <Input
                          id="patientId"
                          defaultValue={userInfo.patientId}
                          readOnly
                          className="bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input
                          id="phone"
                          defaultValue={userInfo.phone}
                          readOnly={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          defaultValue={userInfo.email}
                          readOnly={!isEditing}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Input
                        id="address"
                        defaultValue={userInfo.address}
                        readOnly={!isEditing}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dob">Ngày sinh</Label>
                        <Input
                          id="dob"
                          type="date"
                          defaultValue={userInfo.dateOfBirth}
                          readOnly={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="startDate">Ngày bắt đầu điều trị</Label>
                        <Input
                          id="startDate"
                          type="date"
                          defaultValue={userInfo.startDate}
                          readOnly
                          className="bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-3">Thông tin liên hệ khẩn cấp</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="emergencyName">Tên người liên hệ</Label>
                          <Input
                            id="emergencyName"
                            defaultValue={userInfo.emergencyName}
                            readOnly={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergencyContact">Số điện thoại</Label>
                          <Input
                            id="emergencyContact"
                            defaultValue={userInfo.emergencyContact}
                            readOnly={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex space-x-3 pt-4">
                        <Button onClick={handleSave} className="flex-1">
                          <Save className="mr-2 h-4 w-4" />
                          Lưu thay đổi
                        </Button>
                        <Button
                          onClick={() => setIsEditing(false)}
                          variant="outline"
                          className="flex-1"
                        >
                          Hủy
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Thông tin liên lạc</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{userInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{userInfo.email}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                        <span className="text-sm">{userInfo.address}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Trạng thái điều trị</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge className="bg-green-100 text-green-800">Ổn định</Badge>
                        <p className="text-sm text-gray-600">
                          Đang điều trị với phác đồ ARV, viral load không phát hiện được
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Lịch hẹn của tôi</span>
                  </CardTitle>
                  <CardDescription>
                    Theo dõi các cuộc hẹn khám và điều trị
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.map((appointment, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-4">
                            <div className="font-medium">{appointment.date}</div>
                            <div className="text-gray-600">{appointment.time}</div>
                            <Badge variant="secondary">{appointment.type}</Badge>
                          </div>
                          <Badge 
                            className={
                              appointment.status === "confirmed" ? "bg-green-100 text-green-800" :
                              appointment.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                              "bg-blue-100 text-blue-800"
                            }
                          >
                            {appointment.status === "confirmed" && "Đã xác nhận"}
                            {appointment.status === "pending" && "Chờ xác nhận"}
                            {appointment.status === "completed" && "Hoàn thành"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">Bác sĩ: {appointment.doctor}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Đặt lịch hẹn mới
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span>Thuốc đang sử dụng</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medications.map((med, index) => (
                      <div key={index} className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{med.name}</h4>
                          <Badge className="bg-green-100 text-green-800">Đang dùng</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Liều dùng:</span> {med.dosage}
                          </div>
                          <div>
                            <span className="font-medium">Giờ uống:</span> {med.time}
                          </div>
                          <div>
                            <span className="font-medium">Bắt đầu:</span> {med.started}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Bell className="mr-2 h-4 w-4 text-yellow-600" />
                      Nhắc nhở quan trọng
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Uống thuốc đúng giờ hàng ngày</li>
                      <li>• Không được bỏ liều dù trong bất kỳ trường hợp nào</li>
                      <li>• Thông báo ngay cho bác sĩ nếu có tác dụng phụ</li>
                      <li>• Chuẩn bị thuốc trước khi hết để tránh gián đoạn</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tests" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span>Kết quả xét nghiệm gần đây</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Ngày</th>
                          <th className="text-left py-3 px-2">Xét nghiệm</th>
                          <th className="text-left py-3 px-2">Kết quả</th>
                          <th className="text-left py-3 px-2">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testResults.map((result, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2">{result.date}</td>
                            <td className="py-3 px-2 font-medium">{result.test}</td>
                            <td className="py-3 px-2">{result.result}</td>
                            <td className="py-3 px-2">
                              <Badge 
                                className={
                                  result.status === "normal" || result.status === "undetectable" 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-yellow-100 text-yellow-800"
                                }
                              >
                                {result.status === "normal" && "Bình thường"}
                                {result.status === "undetectable" && "Không phát hiện"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Xem tất cả kết quả
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-orange-600" />
                      <span>Cài đặt thông báo</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">Nhắc nhở uống thuốc</Label>
                        <p className="text-sm text-gray-600">Nhận thông báo giờ uống thuốc</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">Nhắc nhở tái khám</Label>
                        <p className="text-sm text-gray-600">Thông báo lịch hẹn sắp tới</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">Kết quả xét nghiệm</Label>
                        <p className="text-sm text-gray-600">Thông báo khi có kết quả mới</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">Tin tức y tế</Label>
                        <p className="text-sm text-gray-600">Thông tin cập nhật về HIV</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span>Quyền riêng tư & Bảo mật</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">Chế độ ẩn danh</Label>
                        <p className="text-sm text-gray-600">Ẩn thông tin cá nhân khi cần thiết</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">Xác thực 2 bước</Label>
                        <p className="text-sm text-gray-600">Tăng cường bảo mật tài khoản</p>
                      </div>
                      <Switch />
                    </div>
                    <div>
                      <Label htmlFor="password">Đổi mật khẩu</Label>
                      <Button variant="outline" className="w-full mt-2">
                        Thay đổi mật khẩu
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-gray-600" />
                    <span>Cài đặt khác</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="feedback">Góp ý & Phản hồi</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Chia sẻ ý kiến của bạn về dịch vụ..."
                      className="mt-2"
                    />
                    <Button className="mt-2">Gửi phản hồi</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
