
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, TrendingUp, Calendar, Download } from "lucide-react";
import { useState } from "react";

const TestResults = () => {
  const [patientId, setPatientId] = useState("");

  const mockResults = [
    {
      id: 1,
      date: "2024-06-15",
      type: "CD4",
      value: "520",
      unit: "cells/μL",
      status: "normal",
      reference: "> 500"
    },
    {
      id: 2,
      date: "2024-06-15",
      type: "Tải lượng HIV",
      value: "< 50",
      unit: "copies/mL",
      status: "undetectable",
      reference: "< 50"
    },
    {
      id: 3,
      date: "2024-05-15",
      type: "CD4",
      value: "485",
      unit: "cells/μL",
      status: "normal",
      reference: "> 500"
    },
    {
      id: 4,
      date: "2024-05-15",
      type: "Tải lượng HIV",
      value: "75",
      unit: "copies/mL",
      status: "low",
      reference: "< 50"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
      case "undetectable":
        return "bg-green-100 text-green-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "normal":
        return "Bình thường";
      case "undetectable":
        return "Không phát hiện";
      case "low":
        return "Thấp";
      case "high":
        return "Cao";
      default:
        return "Không xác định";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kết quả xét nghiệm & Theo dõi điều trị
            </h1>
            <p className="text-xl text-gray-600">
              Tra cứu kết quả xét nghiệm và theo dõi tiến trình điều trị HIV
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-blue-600" />
                <span>Tra cứu kết quả</span>
              </CardTitle>
              <CardDescription>
                Nhập mã bệnh nhân hoặc số điện thoại để tra cứu kết quả xét nghiệm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="patientId">Mã bệnh nhân / Số điện thoại</Label>
                  <Input
                    id="patientId"
                    placeholder="Nhập mã bệnh nhân hoặc số điện thoại"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                  />
                </div>
                <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                  <Search className="mr-2 h-4 w-4" />
                  Tra cứu
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="results" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="results">Kết quả xét nghiệm</TabsTrigger>
              <TabsTrigger value="history">Lịch sử điều trị</TabsTrigger>
              <TabsTrigger value="regimen">Phác đồ ARV</TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="space-y-6">
              {/* Latest Results Summary */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">CD4 mới nhất</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">520</div>
                    <p className="text-sm text-gray-600">cells/μL</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">Bình thường</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Tải lượng HIV</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">{"< 50"}</div>
                    <p className="text-sm text-gray-600">copies/mL</p>
                    <Badge className="mt-2 bg-blue-100 text-blue-800">Không phát hiện</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Tình trạng điều trị</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold text-green-600">Tốt</div>
                    <p className="text-sm text-gray-600">Đáp ứng điều trị</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">Ổn định</Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span>Chi tiết kết quả xét nghiệm</span>
                    </span>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Ngày xét nghiệm</th>
                          <th className="text-left py-3 px-2">Loại xét nghiệm</th>
                          <th className="text-left py-3 px-2">Kết quả</th>
                          <th className="text-left py-3 px-2">Đơn vị</th>
                          <th className="text-left py-3 px-2">Tham chiếu</th>
                          <th className="text-left py-3 px-2">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockResults.map((result) => (
                          <tr key={result.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2">{result.date}</td>
                            <td className="py-3 px-2 font-medium">{result.type}</td>
                            <td className="py-3 px-2 font-bold">{result.value}</td>
                            <td className="py-3 px-2 text-gray-600">{result.unit}</td>
                            <td className="py-3 px-2 text-gray-600">{result.reference}</td>
                            <td className="py-3 px-2">
                              <Badge className={getStatusColor(result.status)}>
                                {getStatusText(result.status)}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Lịch sử khám bệnh</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        date: "2024-06-15",
                        doctor: "BS. Nguyễn Văn A",
                        diagnosis: "Tái khám định kỳ",
                        notes: "Bệnh nhân đáp ứng tốt với điều trị, tiếp tục phác đồ hiện tại"
                      },
                      {
                        date: "2024-05-15",
                        doctor: "BS. Nguyễn Văn A",
                        diagnosis: "Theo dõi điều trị",
                        notes: "Điều chỉnh liều thuốc, hẹn tái khám sau 1 tháng"
                      },
                      {
                        date: "2024-04-15",
                        doctor: "BS. Trần Thị B",
                        diagnosis: "Khám lần đầu",
                        notes: "Bắt đầu phác đồ ARV: TDF + 3TC + DTG"
                      }
                    ].map((visit, index) => (
                      <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{visit.diagnosis}</h4>
                          <span className="text-sm text-gray-500">{visit.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Bác sĩ: {visit.doctor}</p>
                        <p className="text-sm text-gray-700">{visit.notes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regimen" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <span>Phác đồ ARV hiện tại</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Thuốc đang sử dụng</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h5 className="font-medium">TDF + 3TC + DTG</h5>
                          <p className="text-sm text-gray-600">1 viên/ngày, uống cùng bữa ăn</p>
                          <p className="text-xs text-gray-500 mt-1">Bắt đầu: 15/04/2024</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Lưu ý quan trọng</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Uống thuốc đúng giờ hàng ngày</li>
                        <li>• Không được bỏ liều</li>
                        <li>• Báo cáo tác dụng phụ nếu có</li>
                        <li>• Tái khám định kỳ theo hẹn</li>
                      </ul>
                    </div>
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

export default TestResults;
