namespace RentABikeWAPI.DAL
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Bicycles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        BicycleTypeId = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        RentPrice = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BicycleTypes", t => t.BicycleTypeId, cascadeDelete: true)
                .Index(t => t.BicycleTypeId);
            
            CreateTable(
                "dbo.BicycleTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Bicycles", "BicycleTypeId", "dbo.BicycleTypes");
            DropIndex("dbo.Bicycles", new[] { "BicycleTypeId" });
            DropTable("dbo.BicycleTypes");
            DropTable("dbo.Bicycles");
        }
    }
}
