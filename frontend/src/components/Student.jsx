export default function Student() {
    return (
        <div>
        <h1>View as Student</h1>
        </div>
    );
    function Table() {
    const columns = [ 
        { 
            name: "First Name", 
            selector :  name => row.name,
            sortable : true

        }, 
        { 
            name: "Sunname",
            selector :  name => row.surname, 
            sortable : true,

        }, 
        { 
            name: "Email",
            selector :  name => row.email,
            sortable : true

        },
        { 
            name: "URN", 
            selector :  name => row.urn, 
            sortable : true
        },
    ]
    const data = [ 
        {   urn: "123456789",
            name: "student1", 
            surname: "student1", 
            email: "student1@surrey.ac.uk",
            
        },
        {   urn: "123456789",
        name: "student2", 
        surname: "student2", 
        email: "student2@surrey.ac.uk",
        
    },
    {   urn: "123456789",
    name: "student3", 
    surname: "student3", 
    email: "student3@surrey.ac.uk",
    
},
{   urn: "123456789",
name: "student4", 
surname: "student4", 
email: "student4@surrey.ac.uk",

},

      ]

    return (
      <div className="container t-5">
        <DataTable> 
            columns = {columns}
            data = {data}
           selectableRows
           fixedHeader
           pagination 
        </DataTable>
       
      </div>
      
    );
    

  }
 

}
