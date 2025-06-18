
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Users, 
  FileText, 
  TrendingUp, 
  Clock, 
  Heart, 
  Bell, 
  Activity,
  BarChart3,
  PieChart
} from "lucide-react";

const Dashboard = () => {
  // Mock data for different user roles
  const stats = {
    totalPatients: 1250,
    activePatients: 890,
    newThisMonth: 45,
    undetectableViral: 92,
    adherenceRate: 85
  };

  const recentAppointments = [
    { id: 1, patient: "Nguyễn Văn A", time: "09:00", date: "2024-06-18", type: "Tái khám", status: "confirmed" },
    { id: 2, patient: "Trần Thị B", time: "10:30", date: "2024-06-18", type: "Khám mới", status: "pending" },
    { id: 3, patient: "Lê Văn C", time: "14:00", date: "2024-06-18", type: "Tư vấn", status: "completed" },
  ];

  const alerts = [
    { id: 1, message: "Có 3 bệnh nhân cần nhắc nhở uống thuốc", priority: "medium", time: "2 giờ trước" },
    { id: 2, message: "Kết quả xét nghiệm CD4 bất thường cho BN #1234", priority: "high", time: "4 giờ trước" },
    { id: 3, message: "Lịch tái khám sắp đến hạn: 15 bệnh nhân", priority: "low", time: "1 ngày trước" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Tổng quan về hoạt động điều trị HIV và quản lý bệnh nhân</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="patients">Bệnh nhân</TabsTrigger>
              <TabsTrigger value="treatments">Điều trị</TabsTrigger>
              <TabsTrigger value="reports">Báo cáo</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Overview */}
              <div className="grid md:grid-cols-5 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Tổng bệnh nhân</p>
                        <p className="text-3xl font-bold text-blue-600">{stats.totalPatients}</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Đang điều trị</p>
                        <p className="text-3xl font-bold text-green-600">{stats.activePatients}</p>
                      </div>
                      <Activity className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Mới tháng này</p>
                        <p className="text-3xl font-bold text-purple-600">{stats.newThisMonth}</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Viral không phát hiện</p>
                        <p className="text-3xl font-bold text-orange-600">{stats.undetectableViral}%</p>
                      </div>
                      <Heart className="h-8 w-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Tuân thủ điều trị</p>
                        <p className="text-3xl font-bold text-red-600">{stats.adherenceRate}%</p>
                      </div>
                      <Clock className="h-8 w-8 text-red-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions & Alerts */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span>Lịch hẹn hôm nay</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentAppointments.map((appointment) => (
                          <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3">
                                <div className="font-medium">{appointment.time}</div>
                                <div>{appointment.patient}</div>
                                <Badge variant="secondary">{appointment.type}</Badge>
                              </div>
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status === "confirmed" && "Đã xác nhận"}
                              {appointment.status === "pending" && "Chờ xác nhận"}
                              {appointment.status === "completed" && "Hoàn thành"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Xem tất cả lịch hẹn
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-orange-600" />
                      <span>Thông báo</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {alerts.map((alert) => (
                        <div key={alert.id} className="p-3 border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <Badge className={getPriorityColor(alert.priority)}>
                              {alert.priority === "high" && "Cao"}
                              {alert.priority === "medium" && "Trung bình"}
                              {alert.priority === "low" && "Thấp"}
                            </Badge>
                            <span className="text-xs text-gray-500">{alert.time}</span>
                          </div>
                          <p className="text-sm text-gray-700">{alert.message}</p>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline" size="sm">
                      Xem tất cả
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="patients" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Phân loại bệnh nhân theo độ tuổi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">18-30 tuổi</span>
                          <span className="text-sm">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">31-45 tuổi</span>
                          <span className="text-sm">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">46-60 tuổi</span>
                          <span className="text-sm">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Trên 60 tuổi</span>
                          <span className="text-sm">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tình trạng điều trị</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Ổn định</span>
                        <span className="text-2xl font-bold text-green-600">768</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <span className="font-medium">Theo dõi</span>
                        <span className="text-2xl font-bold text-yellow-600">89</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">Cần can thiệp</span>
                        <span className="text-2xl font-bold text-red-600">33</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="treatments" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Phác đồ ARV phổ biến</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "TDF + 3TC + DTG", patients: 450, percentage: 51 },
                        { name: "ABC + 3TC + DTG", patients: 280, percentage: 32 },
                        { name: "TAF + FTC + BIC", patients: 120, percentage: 14 },
                        { name: "Khác", patients: 40, percentage: 3 }
                      ].map((regimen, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{regimen.name}</span>
                            <span className="text-sm text-gray-600">{regimen.patients} BN ({regimen.percentage}%)</span>
                          </div>
                          <Progress value={regimen.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hiệu quả điều trị</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">92%</div>
                        <p className="text-sm text-gray-600">Viral không phát hiện</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">520</div>
                        <p className="text-sm text-gray-600">CD4 trung bình</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600">85%</div>
                        <p className="text-sm text-gray-600">Tuân thủ điều trị</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">3%</div>
                        <p className="text-sm text-gray-600">Tỷ lệ kháng thuốc</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <span>Báo cáo nhanh</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Báo cáo tháng
                    </Button>
                    <Button className="w-full" variant="outline">
                      <PieChart className="mr-2 h-4 w-4" />
                      Thống kê điều trị
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Phân tích xu hướng
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      Danh sách bệnh nhân
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Thống kê tuần này</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Lịch hẹn hoàn thành</span>
                        <span className="font-bold">45/48</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Bệnh nhân mới</span>
                        <span className="font-bold">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Xét nghiệm thực hiện</span>
                        <span className="font-bold">78</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Tư vấn trực tuyến</span>
                        <span className="font-bold">23</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
