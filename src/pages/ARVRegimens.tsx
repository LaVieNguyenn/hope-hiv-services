
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
import { Plus, Edit, Trash2, Search, Filter, Copy } from "lucide-react";
import { useState } from "react";

const ARVRegimens = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const regimens = [
    {
      id: 1,
      name: "TDF + 3TC + DTG",
      category: "Phác đồ chuẩn",
      indication: "Người lớn > 35kg",
      contraindications: "Suy thận nặng, thai kỳ 3 tháng đầu",
      sideEffects: "Buồn nôn, đau đầu, mệt mỏi",
      dosage: "TDF 300mg + 3TC 300mg + DTG 50mg - 1 viên/ngày",
      notes: "Uống cùng thức ăn, tránh canxi/sắt",
      status: "active"
    },
    {
      id: 2,
      name: "ABC + 3TC + DTG",
      category: "Phác đồ thay thế",
      indication: "Suy thận, không dung nạp TDF",
      contraindications: "HLA-B*5701 dương tính",
      sideEffects: "Phản ứng quá mẫn, buồn nôn",
      dosage: "ABC 600mg + 3TC 300mg + DTG 50mg - 1 viên/ngày",
      notes: "Test HLA-B*5701 trước khi dùng",
      status: "active"
    },
    {
      id: 3,
      name: "AZT + 3TC + NVP",
      category: "Phụ nữ mang thai",
      indication: "Thai phụ, cho con bú",
      contraindications: "Thiếu máu nặng, gan nặng",
      sideEffects: "Thiếu máu, độc tính gan",
      dosage: "AZT 300mg x2 + 3TC 150mg x2 + NVP 200mg x2",
      notes: "Theo dõi công thức máu định kỳ",
      status: "active"
    },
    {
      id: 4,
      name: "ABC + 3TC (Liquid)",
      category: "Trẻ em",
      indication: "Trẻ em < 35kg",
      contraindications: "HLA-B*5701 dương tính",
      sideEffects: "Phản ứng quá mẫn",
      dosage: "Theo cân nặng, dạng siro",
      notes: "Cần test HLA-B*5701, theo dõi phát triển",
      status: "active"
    }
  ];

  const categories = [
    { value: "all", label: "Tất cả" },
    { value: "Phác đồ chuẩn", label: "Phác đồ chuẩn" },
    { value: "Phác đồ thay thế", label: "Phác đồ thay thế" },
    { value: "Phụ nữ mang thai", label: "Phụ nữ mang thai" },
    { value: "Trẻ em", label: "Trẻ em" }
  ];

  const filteredRegimens = regimens.filter(regimen => {
    const matchesSearch = regimen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         regimen.indication.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || regimen.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý Phác đồ ARV</h1>
              <p className="text-gray-600">Quản lý và lựa chọn phác đồ điều trị HIV phù hợp cho bệnh nhân</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Thêm phác đồ mới
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Tạo phác đồ ARV mới</DialogTitle>
                  <DialogDescription>Nhập thông tin chi tiết cho phác đồ điều trị mới</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Tên phác đồ</Label>
                      <Input id="name" placeholder="VD: TDF + 3TC + DTG" />
                    </div>
                    <div>
                      <Label htmlFor="category">Danh mục</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn danh mục" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Phác đồ chuẩn</SelectItem>
                          <SelectItem value="alternative">Phác đồ thay thế</SelectItem>
                          <SelectItem value="pregnancy">Phụ nữ mang thai</SelectItem>
                          <SelectItem value="pediatric">Trẻ em</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="indication">Chỉ định</Label>
                    <Input id="indication" placeholder="Nhóm bệnh nhân phù hợp" />
                  </div>
                  <div>
                    <Label htmlFor="dosage">Liều dùng</Label>
                    <Textarea id="dosage" placeholder="Mô tả chi tiết liều lượng và cách dùng" />
                  </div>
                  <div>
                    <Label htmlFor="contraindications">Chống chỉ định</Label>
                    <Textarea id="contraindications" placeholder="Các trường hợp không nên dùng" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Ghi chú</Label>
                    <Textarea id="notes" placeholder="Lưu ý đặc biệt khi sử dụng" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Hủy</Button>
                  <Button>Lưu phác đồ</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Tìm kiếm phác đồ..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Regimens Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredRegimens.map((regimen) => (
              <Card key={regimen.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{regimen.name}</CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="secondary">{regimen.category}</Badge>
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Chỉ định</h4>
                    <p className="text-sm text-gray-600">{regimen.indication}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">Liều dùng</h4>
                    <p className="text-sm text-gray-600">{regimen.dosage}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Chống chỉ định</h4>
                    <p className="text-sm text-gray-600">{regimen.contraindications}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-orange-700 mb-1">Tác dụng phụ</h4>
                    <p className="text-sm text-gray-600">{regimen.sideEffects}</p>
                  </div>
                  
                  {regimen.notes && (
                    <div>
                      <h4 className="font-medium text-purple-700 mb-1">Ghi chú</h4>
                      <p className="text-sm text-gray-600">{regimen.notes}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Badge variant={regimen.status === 'active' ? 'default' : 'secondary'}>
                      {regimen.status === 'active' ? 'Đang sử dụng' : 'Tạm ngưng'}
                    </Badge>
                    <Button size="sm">Áp dụng cho BN</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARVRegimens;
