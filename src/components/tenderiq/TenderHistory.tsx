import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Building, Calendar, IndianRupee, Search, Eye, Download, MoreHorizontal, Star } from "lucide-react";
import { sampleTenderHistory, tenderHistoryStats } from "@/data/tenderHistory";

const TenderHistory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedTenders, setSelectedTenders] = useState<number[]>([]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Won": return "bg-green-100 text-green-700 border-green-200";
      case "Submitted": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Under Evaluation": return "bg-amber-100 text-amber-700 border-amber-200";
      case "Analysis Complete": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Bid Lost": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const iconMap: Record<string, React.ComponentType<any>> = {
    FileText,
    Building,
    Calendar,
    IndianRupee
  };

  const filteredTenders = sampleTenderHistory.filter(tender => {
    const matchesSearch = searchTerm === "" ||
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.tenderNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.authority.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || tender.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || tender.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-600" />
          <CardTitle>Tender History</CardTitle>
        </div>
        <CardDescription>View and manage all your analyzed tender documents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tenders by title, number, or authority..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Won">Won</SelectItem>
              <SelectItem value="Submitted">Submitted</SelectItem>
              <SelectItem value="Under Evaluation">Under Evaluation</SelectItem>
              <SelectItem value="Analysis Complete">Analysis Complete</SelectItem>
              <SelectItem value="Bid Lost">Bid Lost</SelectItem>
            </SelectContent>
          </Select>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Road Construction">Road Construction</SelectItem>
              <SelectItem value="Bridge Construction">Bridge Construction</SelectItem>
              <SelectItem value="Urban Development">Urban Development</SelectItem>
              <SelectItem value="Highway Construction">Highway Construction</SelectItem>
              <SelectItem value="Rural Development">Rural Development</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tenderHistoryStats.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <Card key={stat.label}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className={`h-5 w-5 ${stat.color}`} />
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tender List */}
        <div className="space-y-4">
          {filteredTenders.map((tender) => (
            <Card key={tender.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={selectedTenders.includes(tender.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedTenders([...selectedTenders, tender.id]);
                      } else {
                        setSelectedTenders(selectedTenders.filter(id => id !== tender.id));
                      }
                    }}
                  />
                  <button className={tender.starred ? "text-yellow-500" : "text-muted-foreground"}>
                    <Star className={`h-5 w-5 ${tender.starred ? "fill-current" : ""}`} />
                  </button>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold">{tender.title}</h3>
                      <p className="text-sm text-muted-foreground">{tender.tenderNo}</p>
                      <p className="text-sm text-muted-foreground">{tender.authority}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className={getStatusColor(tender.status)}>
                        {tender.status}
                      </Badge>
                      <Badge variant="outline">{tender.category}</Badge>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-muted-foreground">•</span>
                        <span className="font-semibold text-green-600">{tender.value}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">Due: {tender.submissionDate}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Preparation Progress</span>
                        <span className="font-semibold">{tender.progress}%</span>
                      </div>
                      <Progress value={tender.progress} />
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => navigate(`/tenderiq/view/${tender.id}`)}>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TenderHistory;
