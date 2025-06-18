
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, MessageCircle, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Sống khỏe mạnh với HIV: Những điều bạn cần biết",
      excerpt: "Hướng dẫn toàn diện về cách duy trì cuộc sống khỏe mạnh và tích cực khi nhiễm HIV, bao gồm chế độ ăn uống, tập luyện và chăm sóc sức khỏe tâm thần.",
      author: "BS. Nguyễn Văn A",
      date: "2024-06-10",
      category: "Sức khỏe",
      readTime: "8 phút",
      views: 1250,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: "Hiểu biết về phác đồ ARV mới nhất",
      excerpt: "Tìm hiểu về các phác đồ điều trị ARV hiện đại và hiệu quả nhất hiện nay, cách thức hoạt động và lợi ích của từng loại thuốc.",
      author: "BS. Trần Thị B",
      date: "2024-06-08",
      category: "Điều trị",
      readTime: "12 phút",
      views: 890,
      comments: 15,
      featured: false
    },
    {
      id: 3,
      title: "Câu chuyện của tôi: 5 năm sống với HIV",
      excerpt: "Chia sẻ chân thực từ một bệnh nhân về hành trình điều trị HIV, những thách thức đã vượt qua và bài học quý giá.",
      author: "Anh Minh (Bệnh nhân)",
      date: "2024-06-05",
      category: "Kinh nghiệm",
      readTime: "6 phút",
      views: 2100,
      comments: 45,
      featured: true
    },
    {
      id: 4,
      title: "Phòng ngừa HIV: Những điều quan trọng",
      excerpt: "Hướng dẫn chi tiết về các biện pháp phòng ngừa HIV hiệu quả, từ sử dụng bao cao su đến PrEP và PEP.",
      author: "BS. Lê Văn C",
      date: "2024-06-03",
      category: "Phòng ngừa",
      readTime: "10 phút",
      views: 1550,
      comments: 31,
      featured: false
    },
    {
      id: 5,
      title: "Xây dựng mối quan hệ tích cực trong gia đình",
      excerpt: "Cách chia sẻ với gia đình về tình trạng HIV và xây dựng mối quan hệ hỗ trợ, thấu hiểu lẫn nhau.",
      author: "ThS. Phạm Thị D",
      date: "2024-06-01",
      category: "Tâm lý",
      readTime: "7 phút",
      views: 920,
      comments: 18,
      featured: false
    },
    {
      id: 6,
      title: "Giải đáp thắc mắc về xét nghiệm HIV",
      excerpt: "Những câu hỏi thường gặp về xét nghiệm HIV, từ quy trình thực hiện đến cách hiểu kết quả và thời gian cần thiết.",
      author: "BS. Hoàng Văn E",
      date: "2024-05-28",
      category: "Xét nghiệm",
      readTime: "9 phút",
      views: 1340,
      comments: 27,
      featured: false
    }
  ];

  const categories = [
    { name: "Tất cả", count: blogPosts.length },
    { name: "Sức khỏe", count: 8 },
    { name: "Điều trị", count: 12 },
    { name: "Kinh nghiệm", count: 15 },
    { name: "Phòng ngừa", count: 6 },
    { name: "Tâm lý", count: 9 },
    { name: "Xét nghiệm", count: 5 }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sức khỏe":
        return "bg-green-100 text-green-800";
      case "Điều trị":
        return "bg-blue-100 text-blue-800";
      case "Kinh nghiệm":
        return "bg-purple-100 text-purple-800";
      case "Phòng ngừa":
        return "bg-orange-100 text-orange-800";
      case "Tâm lý":
        return "bg-pink-100 text-pink-800";
      case "Xét nghiệm":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & Chia sẻ kinh nghiệm
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nơi chia sẻ kiến thức y khoa, kinh nghiệm sống và những câu chuyện truyền cảm hứng 
              từ cộng đồng người sống với HIV
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Featured Posts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="mr-2 h-6 w-6 text-red-500" />
                  Bài viết nổi bật
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts.filter(post => post.featured).map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getCategoryColor(post.category)}>
                            {post.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                        <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.author}</span>
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Eye className="mr-1 h-3 w-3" />
                              {post.views}
                            </span>
                            <span className="flex items-center">
                              <MessageCircle className="mr-1 h-3 w-3" />
                              {post.comments}
                            </span>
                          </div>
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                          Đọc tiếp
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Posts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="mr-2 h-6 w-6 text-blue-500" />
                  Tất cả bài viết
                </h2>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 mb-2 md:mb-0">
                            <Badge className={getCategoryColor(post.category)}>
                              {post.category}
                            </Badge>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                          </div>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Tác giả: {post.author}</span>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Eye className="mr-1 h-3 w-3" />
                              {post.views}
                            </span>
                            <span className="flex items-center">
                              <MessageCircle className="mr-1 h-3 w-3" />
                              {post.comments}
                            </span>
                            <Button variant="link" className="p-0 h-auto">
                              Đọc tiếp →
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Danh mục</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded"
                      >
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Liên kết hữu ích</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/appointments" className="block text-sm text-blue-600 hover:underline">
                    Đặt lịch khám ngay
                  </Link>
                  <Link to="/test-results" className="block text-sm text-blue-600 hover:underline">
                    Tra cứu kết quả xét nghiệm
                  </Link>
                  <Link to="/doctors" className="block text-sm text-blue-600 hover:underline">
                    Tìm hiểu về đội ngũ bác sĩ
                  </Link>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="mr-2 h-5 w-5 text-green-500" />
                    Hỗ trợ cộng đồng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Tham gia nhóm hỗ trợ trực tuyến để chia sẻ kinh nghiệm và nhận sự động viên từ cộng đồng.
                  </p>
                  <Button className="w-full" variant="outline">
                    Tham gia nhóm
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
