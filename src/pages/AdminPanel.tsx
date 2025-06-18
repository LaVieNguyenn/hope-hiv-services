
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
import { Switch } from "@/components/ui/switch";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Settings, 
  Users, 
  Calendar, 
  FileText, 
  Clock,
  Stethoscope,
  Heart,
  Eye
} from "lucide-react";
import { useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("services");

  // Mock data
  const services = [
    { id: 1, name: "Khám HIV định kỳ", price: "200,000", duration: "30 phút", status: "active" },
    { id: 2, name: "Xét nghiệm CD4", price: "150,000", duration: "15 phút", status: "active" },
    { id: 3, name: "Tư vấn tâm lý", price: "300,000", duration: "45 phút", status: "active" },
    { id: 4, name: "Khám thai kỳ HIV+", price: "250,000", duration: "40 phút", status: "inactive" }
  ];

  const timeSlots = [
    { id: 1, time: "08:00", duration: "30 phút", available: true },
    { id: 2, time: "08:30", duration: "30 phút", available: true },
    { id: 3, time: "09:00", duration: "30 phút", available: true },
    { id: 4, time: "09:30", duration: "30 phút", available: false },
    { id: 5, time: "10:00", duration: "30 phút", available: true }
  ];

  const doctors = [
    { 
      id: 1, 
      name: "BS. Nguyễn Văn A", 
      specialty: "HIV/AIDS", 
      experience: "15 năm",
      status: "active",
      avatar: "/placeholder.svg"
    },
    { 
      id: 2, 
      name: "BS. Trần Thị B", 
      specialty: "Nội tổng hợp", 
      experience: "12 năm",
      status: "active",
      avatar: "/placeholder.svg"
    }
  ];

  const blogPosts = [
    { 
      id: 1, 
      title: "Cập nhật phác đồ ARV mới nhất 2024", 
      author: "BS. Nguyễn Văn A",
      date: "2024-06-15",
      status: "published",
      views: 1250
    },
    { 
      id: 2, 
      title: "Hướng dẫn chăm sóc thai kỳ với HIV", 
      author: "BS. Trần Thị B",
      date: "2024-06-10",
      status: "draft",
      views: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản trị hệ thống</h1>
            <p className="text-gray-600">Quản lý dịch vụ, lịch khám, bác sĩ và nội dung</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="services" className="flex items-center space-x-2">
                <Stethoscope className="h-4 w-4" />
                <span>Dịch vụ</span>
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Thời gian khám</span>
              </TabsTrigger>
              <TabsTrigger value="doctors" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Bác sĩ</span>
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Blog</span>
              </TabsTrigger>
            </TabsList>

            {/* Services Management */}
            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Quản lý dịch vụ</CardTitle>
                      <CardDescription>Quản lý các dịch vụ khám chữa bệnh</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          Thêm dịch vụ
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Thêm dịch vụ mới</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="serviceName">Tên dịch vụ</Label>
                            <Input id="serviceName" placeholder="VD: Khám HIV định kỳ" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="price">Giá (VNĐ)</Label>
                              <Input id="price" placeholder="200,000" />
                            </div>
                            <div>
                              <Label htmlFor="duration">Thời gian</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn thời gian" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="15">15 phút</SelectItem>
                                  <SelectItem value="30">30 phút</SelectItem>
                                  <SelectItem value="45">45 phút</SelectItem>
                                  <SelectItem value="60">60 phút</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="description">Mô tả</Label>
                            <Textarea id="description" placeholder="Mô tả chi tiết dịch vụ" />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Hủy</Button>
                          <Button>Thêm dịch vụ</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tên dịch vụ</TableHead>
                        <TableHead>Giá</TableHead>
                        <TableHead>Thời gian</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {services.map((service) => (
                        <TableRow key={service.id}>
                          <TableCell className="font-medium">{service.name}</TableCell>
                          <TableCell>{service.price} VNĐ</TableCell>
                          <TableCell>{service.duration}</TableCell>
                          <TableCell>
                            <Badge variant={service.status === 'active' ? 'default' : 'secondary'}>
                              {service.status === 'active' ? 'Hoạt động' : 'Tạm ngưng'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Schedule Management */}
            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Quản lý khung giờ khám</CardTitle>
                      <CardDescription>Thiết lập và quản lý các khung giờ khám bệnh</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          Thêm khung giờ
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Thêm khung giờ mới</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="startTime">Giờ bắt đầu</Label>
                              <Input id="startTime" type="time" />
                            </div>
                            <div>
                              <Label htmlFor="duration">Thời lượng</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn thời lượng" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="15">15 phút</SelectItem>
                                  <SelectItem value="30">30 phút</SelectItem>
                                  <SelectItem value="45">45 phút</SelectItem>
                                  <SelectItem value="60">60 phút</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="available" />
                            <Label htmlFor="available">Có sẵn để đặt lịch</Label>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Hủy</Button>
                          <Button>Thêm khung giờ</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Thời gian</TableHead>
                        <TableHead>Thời lượng</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {timeSlots.map((slot) => (
                        <TableRow key={slot.id}>
                          <TableCell className="font-medium">{slot.time}</TableCell>
                          <TableCell>{slot.duration}</TableCell>
                          <TableCell>
                            <Badge variant={slot.available ? 'default' : 'secondary'}>
                              {slot.available ? 'Có sẵn' : 'Không có sẵn'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Doctors Management */}
            <TabsContent value="doctors" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Quản lý bác sĩ</CardTitle>
                      <CardDescription>Quản lý thông tin và tài khoản bác sĩ</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          Thêm bác sĩ
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Thêm bác sĩ mới</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="doctorName">Họ và tên</Label>
                              <Input id="doctorName" placeholder="VD: BS. Nguyễn Văn A" />
                            </div>
                            <div>
                              <Label htmlFor="specialty">Chuyên khoa</Label>
                              <Input id="specialty" placeholder="VD: HIV/AIDS" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="doctor@hospital.com" />
                            </div>
                            <div>
                              <Label htmlFor="phone">Số điện thoại</Label>
                              <Input id="phone" placeholder="0123-456-789" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="experience">Kinh nghiệm</Label>
                            <Input id="experience" placeholder="VD: 10 năm" />
                          </div>
                          <div>
                            <Label htmlFor="bio">Giới thiệu</Label>
                            <Textarea id="bio" placeholder="Mô tả ngắn về bác sĩ" />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Hủy</Button>
                          <Button>Thêm bác sĩ</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {doctors.map((doctor) => (
                      <div key={doctor.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={doctor.avatar} />
                            <AvatarFallback>{doctor.name.split(' ').pop()?.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{doctor.name}</h4>
                            <p className="text-sm text-gray-600">{doctor.specialty}</p>
                            <p className="text-sm text-gray-500">{doctor.experience} kinh nghiệm</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={doctor.status === 'active' ? 'default' : 'secondary'}>
                            {doctor.status === 'active' ? 'Hoạt động' : 'Tạm ngưng'}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Blog Management */}
            <TabsContent value="blog" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Quản lý bài viết</CardTitle>
                      <CardDescription>Quản lý nội dung blog và bài viết y khoa</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          Viết bài mới
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Tạo bài viết mới</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="title">Tiêu đề</Label>
                            <Input id="title" placeholder="Nhập tiêu đề bài viết" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="author">Tác giả</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn tác giả" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="doctor1">BS. Nguyễn Văn A</SelectItem>
                                  <SelectItem value="doctor2">BS. Trần Thị B</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="category">Danh mục</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn danh mục" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="treatment">Điều trị</SelectItem>
                                  <SelectItem value="prevention">Dự phòng</SelectItem>
                                  <SelectItem value="research">Nghiên cứu</SelectItem>
                                  <SelectItem value="lifestyle">Lối sống</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="excerpt">Tóm tắt</Label>
                            <Textarea id="excerpt" placeholder="Tóm tắt ngắn về bài viết" />
                          </div>
                          <div>
                            <Label htmlFor="content">Nội dung</Label>
                            <Textarea id="content" rows={8} placeholder="Nội dung chi tiết bài viết" />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Lưu nháp</Button>
                          <Button>Xuất bản</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tiêu đề</TableHead>
                        <TableHead>Tác giả</TableHead>
                        <TableHead>Ngày tạo</TableHead>
                        <TableHead>Lượt xem</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="font-medium">{post.title}</TableCell>
                          <TableCell>{post.author}</TableCell>
                          <TableCell>{post.date}</TableCell>
                          <TableCell>{post.views}</TableCell>
                          <TableCell>
                            <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                              {post.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
