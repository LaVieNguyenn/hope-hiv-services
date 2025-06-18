
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, GraduationCap, Stethoscope, Phone, Mail, MapPin, Plus, Edit, Save } from "lucide-react";
import { useState } from "react";

const DoctorManagement = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  const doctorInfo = {
    id: 1,
    name: "BS. Nguyễn Văn A",
    title: "Trưởng khoa HIV/AIDS",
    avatar: "/placeholder.svg",
    email: "dr.nguyenvana@hospital.com",
    phone: "0123-456-789",
    address: "Bệnh viện ABC, Hà Nội",
    specialties: ["HIV/AIDS", "Bệnh nhiễm trùng", "Y học dự phòng"],
    experience: "15 năm",
    languages: ["Tiếng Việt", "Tiếng Anh"],
    about: "Bác sĩ Nguyễn Văn A có hơn 15 năm kinh nghiệm trong lĩnh vực điều trị HIV/AIDS...",
    education: [
      { degree: "Tiến sĩ Y khoa", institution: "Đại học Y Hà Nội", year: "2008" },
      { degree: "Chứng chỉ HIV/AIDS", institution: "WHO", year: "2010" },
      { degree: "Chuyên khoa II Nhiễm", institution: "Đại học Y Hà Nội", year: "2015" }
    ],
    achievements: [
      "Bác sĩ xuất sắc năm 2023",
      "Giải thưởng nghiên cứu HIV 2022",
      "Chuyên gia tư vấn WHO"
    ]
  };

  const schedule = [
    { day: "Thứ 2", morning: "8:00-12:00", afternoon: "14:00-17:00", status: "available" },
    { day: "Thứ 3", morning: "8:00-12:00", afternoon: "Nghỉ", status: "partial" },
    { day: "Thứ 4", morning: "8:00-12:00", afternoon: "14:00-17:00", status: "available" },
    { day: "Thứ 5", morning: "Nghỉ", afternoon: "14:00-17:00", status: "partial" },
    { day: "Thứ 6", morning: "8:00-12:00", afternoon: "14:00-17:00", status: "available" },
    { day: "Thứ 7", morning: "8:00-12:00", afternoon: "Nghỉ", status: "partial" },
    { day: "Chủ nhật", morning: "Nghỉ", afternoon: "Nghỉ", status: "off" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý thông tin bác sĩ</h1>
              <p className="text-gray-600">Cập nhật và quản lý hồ sơ chuyên nghiệp</p>
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Lưu thay đổi
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={doctorInfo.avatar} />
                      <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{doctorInfo.name}</h3>
                    <p className="text-sm text-gray-600">{doctorInfo.title}</p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <nav className="space-y-2">
                    <Button 
                      variant={activeTab === "profile" ? "default" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("profile")}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Thông tin chung
                    </Button>
                    <Button 
                      variant={activeTab === "education" ? "default" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("education")}
                    >
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Học vấn & Chứng chỉ
                    </Button>
                    <Button 
                      variant={activeTab === "specialties" ? "default" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("specialties")}
                    >
                      <Stethoscope className="mr-2 h-4 w-4" />
                      Chuyên môn
                    </Button>
                    <Button 
                      variant={activeTab === "schedule" ? "default" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("schedule")}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Lịch làm việc
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "profile" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin cá nhân</CardTitle>
                    <CardDescription>Cập nhật thông tin liên hệ và giới thiệu</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Họ và tên</Label>
                        <Input id="fullName" defaultValue={doctorInfo.name} />
                      </div>
                      <div>
                        <Label htmlFor="title">Chức danh</Label>
                        <Input id="title" defaultValue={doctorInfo.title} />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={doctorInfo.email} />
                      </div>
                      <div>
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input id="phone" defaultValue={doctorInfo.phone} />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Địa chỉ làm việc</Label>
                      <Input id="address" defaultValue={doctorInfo.address} />
                    </div>
                    
                    <div>
                      <Label htmlFor="about">Giới thiệu</Label>
                      <Textarea id="about" rows={4} defaultValue={doctorInfo.about} />
                    </div>
                    
                    <div>
                      <Label htmlFor="languages">Ngôn ngữ</Label>
                      <Input id="languages" defaultValue={doctorInfo.languages.join(", ")} placeholder="Tiếng Việt, Tiếng Anh, ..." />
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "education" && (
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Học vấn & Chứng chỉ</CardTitle>
                        <CardDescription>Quản lý bằng cấp và chứng chỉ chuyên môn</CardDescription>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Thêm bằng cấp
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Thêm bằng cấp mới</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div>
                              <Label htmlFor="degree">Tên bằng cấp</Label>
                              <Input id="degree" placeholder="VD: Tiến sĩ Y khoa" />
                            </div>
                            <div>
                              <Label htmlFor="institution">Trường/Tổ chức</Label>
                              <Input id="institution" placeholder="VD: Đại học Y Hà Nội" />
                            </div>
                            <div>
                              <Label htmlFor="year">Năm tốt nghiệp</Label>
                              <Input id="year" type="number" placeholder="2023" />
                            </div>
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline">Hủy</Button>
                            <Button>Thêm</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {doctorInfo.education.map((edu, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{edu.degree}</h4>
                            <p className="text-sm text-gray-600">{edu.institution}</p>
                            <p className="text-sm text-gray-500">Năm {edu.year}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              Xóa
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "specialties" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Chuyên môn & Thành tựu</CardTitle>
                    <CardDescription>Quản lý lĩnh vực chuyên môn và thành tựu nghề nghiệp</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Lĩnh vực chuyên môn</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {doctorInfo.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-sm">
                            {specialty}
                            <Button size="sm" variant="ghost" className="ml-2 h-4 w-4 p-0">×</Button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex mt-2">
                        <Input placeholder="Thêm chuyên môn mới..." className="mr-2" />
                        <Button>Thêm</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label>Thành tựu & Giải thưởng</Label>
                      <div className="space-y-2 mt-2">
                        {doctorInfo.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span>{achievement}</span>
                            <Button size="sm" variant="ghost" className="text-red-600">Xóa</Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex mt-2">
                        <Input placeholder="Thêm thành tựu mới..." className="mr-2" />
                        <Button>Thêm</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "schedule" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Lịch làm việc</CardTitle>
                    <CardDescription>Cài đặt thời gian làm việc hàng tuần</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ngày</TableHead>
                          <TableHead>Buổi sáng</TableHead>
                          <TableHead>Buổi chiều</TableHead>
                          <TableHead>Trạng thái</TableHead>
                          <TableHead>Thao tác</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {schedule.map((day, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{day.day}</TableCell>
                            <TableCell>{day.morning}</TableCell>
                            <TableCell>{day.afternoon}</TableCell>
                            <TableCell>
                              <Badge variant={
                                day.status === 'available' ? 'default' :
                                day.status === 'partial' ? 'secondary' : 'outline'
                              }>
                                {day.status === 'available' ? 'Có mặt' :
                                 day.status === 'partial' ? 'Một phần' : 'Nghỉ'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorManagement;
