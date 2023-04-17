/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;


/**
 *
 * @author alumno
 */
public class RegistrarAlumno extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     * 
     * vamos a necesitar un constructor para poder
     * inicializar las variables que se van a ocupar para 
     * la conexion con la bd
     * para ello vamos a crear 3 tipos de objeto
     */
    
    private Connection con;
    
    /*
    Este objeto nos sirve para poder crear una conexion con 
    la base de datos, recordemos que en bd, se debe de ocupar
    sentencias que se diven en dos lmd y ldd
    */
    private Statement set;
    
    /*
    Este objeto es el que se encarga de poder establecer las
    sentencias para definir y manipular los datos
    por ejemplo
    insert into
    update
    create
    alter
    drop
    delete
    */
    private ResultSet rs;
    
    /*
    Este objeto es exclusivo de las consultas en la bd
    select
    */
    
    //vamos a crear el constructor
    
    
    @Override
    public void init(ServletConfig scg) throws ServletException {
        //debo definir donde esta la bd
        String url = "jdbc:mysql:3306//localhost/alumnoscecyt9";
        //tipo de conector
        //motor de la bd
        //puerto
        //ip donde esta alojada la bd
        //nombre de la bd
        String username = "root";
        String password = "n0m3l0";
        
        try{
            //debo mandar a llamar a la clase para establecer la conexion
            Class.forName("com.mysql.jdbc.Driver");
            
            //establezco conexion
            url = "jdbc:mysql://localhost/alumnoscecyt9";
            con = DriverManager
                    .getConnection(url, username, password);
            //establezco la sentencia
            set = con.createStatement();
            
            System.out.println("Wiiii si conecto *w* ");
            
        }catch (Exception e){
            System.out.println("Solo juguito contigo");
            System.out.println("Error: " + e.getMessage());
            System.out.println("Ruta: " + e.getStackTrace());
        
        }
    }
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            //obtener los parametros del formulario
            
            int bol, edad;
            String nom, appat, apmat;
            
            bol = Integer.parseInt(request.getParameter("boleta"));
            edad = Integer.parseInt(request.getParameter("edad"));
            
            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            apmat = request.getParameter("apmat");
            
            
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de Estudiantes</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Bienvenido al Registro del Purgatorio del Cecyt wiii</h1>");
            
            //si lo registro obtener una salida
            //y sino que diga registro no completado
            
            String q = 
            "insert into estudiante (boleta, nombre, appat, apmat, edad) "
            + "values ("+bol+", '"+nom+"', '"+appat+"', '"+apmat+"', "+edad+")";
            
            try{
            set.executeUpdate(q);
            
            out.println("<h1>Registro Exitoso del Alumno</h1>");
            
            }catch(Exception e){
            
                out.println("<h1>Registro No Exitoso solo juguito contigo</h1>");
                System.out.println("Error: " + e.getMessage());
                System.out.println("Origen: " + e.getStackTrace());
                
            }
            out.println("<a href = 'index.html'>Regresar al Inicio </a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
