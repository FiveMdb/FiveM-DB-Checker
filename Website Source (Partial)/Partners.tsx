
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, User, Server, BarChart2, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/toast";
import { fetchServerData } from "@/utils/serverApi";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Creator Partners
const CREATORS_DATA = [
  {
    id: 1,
    name: "IC3D MARKETPLACE",
    description: "Specializing in FiveM resource development and custom server solutions.",
    website: "https://ic3d-marketplace.tebex.io/",
    image: "https://i.ibb.co/Y44778WM/LOGO-IC3-D-Marketplace-2000x2000-Transparente-by-Design-Ideal-Copy.png",
    specialty: "Resource Development",
    founded: "2020"
  },
  {
    id: 2,
    name: "Loki Scripts",
    description: "We devlop unique FiveM scripts focussed on mid/hard-core RP Servers",
    website: "https://www.lokiscripts.com",
    image: "https://api.lokiscripts.com/assets/logo_squared.png",
    specialty: "Script Development",
    founded: "2024"
  }
];

// Server Partners
const SERVERS_DATA = [
  {
    id: 1,
    name: "REPLACE",
    description: "REPLACE",
    status: "offline", // Will be updated with live data
    players: 0, // Will be updated with live data
    maxPlayers: 0, // Will be updated with live data
    joinCode: "a74rmz", // The server join code
    ip: "REPLACE",
    discord: "REPLACE",
    lastCheck: "Checking...",
    framework: "REPLACE",
    tags: ["roleplay", "economy", "jobs"]
  }
];

const Partners = () => {
  const [selectedCreator, setSelectedCreator] = useState(CREATORS_DATA[0]);
  const [servers, setServers] = useState(SERVERS_DATA);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchLiveServerData = async () => {
    setIsLoading(true);
    
    try {
      const updatedServers = await Promise.all(
        servers.map(async (server) => {
          const serverData = await fetchServerData(server.joinCode);
          
          if (serverData) {
            return {
              ...server,
              status: "online",
              players: serverData.Data.clients,
              maxPlayers: serverData.Data.sv_maxclients,
              lastCheck: "Just now",
            };
          }
          
          return {
            ...server,
            status: "offline",
            lastCheck: "Just now"
          };
        })
      );
      
      setServers(updatedServers);
      toast.success("Server data updated successfully");
    } catch (error) {
      console.error("Error fetching server data:", error);
      toast.error("Failed to update server data");
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Fetch server data on initial load
    fetchLiveServerData();
    
    // Set up interval to refresh data every 5 minutes
    const interval = setInterval(fetchLiveServerData, 5 * 60 * 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-display mb-6 text-gradient animate-fade-in">
            Our <span className="font-bold">Partners</span>
          </h1>
          <p className="text-white/70 mb-12 max-w-3xl text-balance">
            We collaborate with the best creators and servers in the FiveM ecosystem to bring
            transparency, innovation, and community-driven development.
          </p>
          
          <div className="relative">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20"></div>
            </div>
            
            <Tabs defaultValue="creators" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-white/5">
                <TabsTrigger value="creators" className="flex items-center gap-2 data-[state=active]:text-gradient">
                  <User className="w-4 h-4" />
                  Creators
                </TabsTrigger>
                <TabsTrigger value="servers" className="flex items-center gap-2 data-[state=active]:text-gradient">
                  <Server className="w-4 h-4" />
                  Servers
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="creators" className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="glass-card p-6 rounded-xl sticky top-24">
                      <h3 className="font-display text-xl mb-4">Featured Creators</h3>
                      <div className="space-y-4">
                        {CREATORS_DATA.map(creator => (
                          <div 
                            key={creator.id}
                            className={`p-4 rounded-lg transition-all cursor-pointer ${
                              selectedCreator.id === creator.id 
                                ? 'bg-white/10 shadow-lg' 
                                : 'hover:bg-white/5'
                            }`}
                            onClick={() => setSelectedCreator(creator)}
                          >
                            <h4 className="font-display text-lg">{creator.name}</h4>
                            <p className="text-sm text-white/70">{creator.specialty}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="glass-card rounded-xl overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={selectedCreator.image} 
                          alt={selectedCreator.name} 
                          className="w-full object-cover"
                        />
                      </div>
                      
                      <div className="p-6">
                        <h2 className="text-2xl font-display mb-2">{selectedCreator.name}</h2>
                        <p className="text-white/80 mb-6">{selectedCreator.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div>
                            <p className="text-sm text-white/50">Specialty</p>
                            <p className="font-medium">{selectedCreator.specialty}</p>
                          </div>
                          <div>
                            <p className="text-sm text-white/50">Founded</p>
                            <p className="font-medium">{selectedCreator.founded}</p>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-display mb-4">Creator's Website</h3>
                        <div className="rounded-lg overflow-hidden border border-white/10 mb-6 bg-black/30">
                          <AspectRatio ratio={16/9}>
                            <iframe 
                              src={selectedCreator.website} 
                              title={`${selectedCreator.name} website`} 
                              className="w-full h-full" 
                              sandbox="allow-same-origin allow-scripts"
                            />
                          </AspectRatio>
                        </div>
                        
                        <Button variant="outline" className="flex items-center gap-2" asChild>
                          <a href={selectedCreator.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Visit Website
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="servers" className="animate-fade-in">
                <div className="grid grid-cols-1 gap-8">
                  {servers.map(server => (
                    <Card key={server.id} className="glass-card overflow-hidden border-0 animate-fade-in" style={{animationDelay: `${server.id * 100}ms`}}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle className="text-xl font-display flex items-center">
                              {server.name}
                              <span 
                                className={`ml-3 w-3 h-3 rounded-full ${
                                  server.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                                }`}
                              />
                            </CardTitle>
                            <CardDescription>{server.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-white/50">Last check</div>
                            <div className="text-sm">{server.lastCheck}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm text-white/50 mb-1">Server Info</h4>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>Framework:</div>
                                <div>{server.framework}</div>
                                <div>IP Address:</div>
                                <div>{server.ip}</div>
                                {server.status === 'online' && (
                                  <>
                                    <div>Join Code:</div>
                                    <div>{server.joinCode}</div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm text-white/50 mb-1">Tags</h4>
                              <div className="flex flex-wrap gap-2">
                                {server.tags.map(tag => (
                                  <span key={tag} className="bg-white/10 px-2 py-1 rounded text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="glass-effect rounded-lg p-4 md:col-span-2">
                            <h4 className="text-sm font-medium flex items-center gap-2 mb-4">
                              <BarChart2 className="w-4 h-4" />
                              Live Server Stats
                              {isLoading && (
                                <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                              )}
                            </h4>
                            
                            {server.status === 'online' ? (
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <div className="text-3xl font-display">
                                    {server.players}<span className="text-white/50 text-sm">/{server.maxPlayers}</span>
                                  </div>
                                  <div className="text-sm text-white/50">Active Players</div>
                                  <div className="w-full bg-white/10 h-2 rounded-full mt-2">
                                    <div 
                                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                      style={{ width: `${(server.players/server.maxPlayers)*100}%` }}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="text-3xl font-display">
                                    Online
                                  </div>
                                  <div className="text-sm text-white/50">Server Status</div>
                                  <div className="animate-pulse-subtle mt-2 text-green-400 text-xs">
                                    ● Live and operational
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="p-6 bg-white/5 rounded-lg text-center">
                                <p className="text-white/70 mb-2">Server is currently offline</p>
                                <p className="text-xs text-white/50">We couldn't connect to the server or it's currently down</p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <Collapsible className="mt-4">
                          <CollapsibleTrigger className="flex items-center w-full justify-center p-2 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded transition-all">
                            <span>Advanced server details</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="mt-4 p-4 bg-white/5 rounded-lg">
                              <h4 className="text-sm font-medium mb-2">Connection Details</h4>
                              <div className="text-sm">
                                <code className="bg-black/30 p-1 rounded">connect {server.ip}</code>
                              </div>
                              
                              <h4 className="text-sm font-medium mt-4 mb-2">Status History</h4>
                              <div className="h-24 bg-black/20 rounded flex items-center justify-center">
                                <p className="text-xs text-white/50">Status history chart will be displayed here</p>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-4 border-t border-white/10 pt-4">
                        <Button 
                          variant="secondary" 
                          size="sm"
                          onClick={fetchLiveServerData}
                          disabled={isLoading}
                          className="flex items-center gap-2"
                        >
                          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                          Check for Updates
                        </Button>
                        <Button variant="default" size="sm" asChild>
                          <a href={server.discord} target="_blank" rel="noopener noreferrer">
                            Join Discord
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partners;
