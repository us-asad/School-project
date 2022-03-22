const data = {
  images: {
    logoImage: {
      url: "",
      alt: "Logo"
    },
    calendarImage: {
      url: "/calendar.svg",
      alt: "calendar ico"
    },
  },
  layout: {
    navItems: [
      {
        name: "Home", 
        slug: "/"
      },
      {
        name: "About",
        slug: "/#about"
      },
      {
        name: "Contact",
        slug: "/#contact"
      },
      {
        name: "Blog",
        slug: "/blog"
      }
    ],
    footer: {
      bottomText: `© ${new Date().getFullYear()} School 8 | All Right Reserved`
    }
  },
  home: {
    homeMain: {
      title: "Our Goal is to be The Best!",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: {
        url: "/blog",
        name: "Know more through Blog"
      },
      image: {
        url: "/homeMain.png",
        alt: "home img"
      }
    },
    about: {
      sectionTitle: "About Us",
      status: [
        {
          name: "teachers", 
          count: "344", 
          image: {
            url: "/status-icons/teacher.png",
            alt: "teachers icon"
          }
        },
        {
          name: "classes", 
          count: "323",
          image: {
            url: "/status-icons/class.png",
            alt: "classes icon"
          }
        },
        {
          name: "pupils", 
          count: "2834", 
          image: {
            url: "/status-icons/pupil.png",
            alt: "pupils icon"
          }
        }
      ],
      aboutContent: {
        mainImage: {
          url: "/carousel/1.jpg",
          alt: "School Pic"
        },
        title: "8 School",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      staff: {
        main: [
          {
            image: {
              url: "/staff/default.png",
              alt: "manager1 pic"
            },
            name: "Name1 Name2",
            position: "manager1"
          },
          {
            image: {
              url: "/staff/default.png",
              alt: "director pic"
            },
            name: "Name1 Name2",
            position: "director"
          },
          {
            image: {
              url: "/staff/default.png",
              alt: "manager2 pic"
            },
            name: "Name1 Name2",
            position: "manager2"
          }
        ],
        topStaff: [
          {
            title: "Our Top teachers",
            staffData: [
              {
                image: {
                  url: "/staff/default.png",
                  alt: "history pic"
                },
                name: "Name1 Name2",
                position: "history"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "mathematics pic"
                },
                name: "Name1 Name2",
                position: "mathematics"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "chemistry pic"
                },
                name: "Name1 Name2",
                position: "chemistry"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "english pic"
                },
                name: "Name1 Name2",
                position: "english"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "goodTeacher pic"
                },
                name: "Name1 Name2",
                position: "goodTeacher"
              },
            ]
          },
          {
            title: "Our Top Pupils",
            staffData: [
              {
                image: {
                  url: "/staff/default.png",
                  alt: "history pic"
                },
                name: "Name1 Name2",
                position: "history"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "mathematics pic"
                },
                name: "Name1 Name2",
                position: "mathematics"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "chemistry pic"
                },
                name: "Name1 Name2",
                position: "chemistry"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "english pic"
                },
                name: "Name1 Name2",
                position: "english"
              },
              {
                image: {
                  url: "/staff/default.png",
                  alt: "goodTeacher pic"
                },
                name: "Name1 Name2",
                position: "goodTeacher"
              },
            ]
          }
        ]
      }
    },
    contact: {
      title: "Contact Us",
      socialMedia: {
        title: "Social Media",
        icons: [
          { 
            url: "#",
            image: {
              url: "/icons/facebook.png",
              alt: "Facebook"
            }
          },
          { 
            url: "#",
            image: {
              url: "/icons/instagram.png",
              alt: "Instagram"
            }
          },
          { 
            url: "#",
            image: {
              url: "/icons/telegram.png",
              alt: "Telegram"
            }
          },
          { 
            url: "#",
            image: {
              url: "/icons/youtube.png",
              alt: "YouTube"
            }
          }
        ]
      },
      contactForm: {
        title: "Send a Message",
        buttonName: "send message",
        alerts: {
          success: "Your message was successfully sent!",
          fail: "Your message failed, please try again",
          validationFail: "Please fill all fields with corrent value!"
        },
        inputFields: [
          {
            name: "user_name",
            type: "text",
            placeholder: "Name"
          },
          {
            name: "user_email",
            type: "email",
            placeholder: "Email"
          }
        ],
        textareaPlaceholder: "Message..."
      },
      contactDetails: [
        {
          contactName: "Location",
          image: {
            url: "/icons/location.png",
            alt: "loc icon"
          },
          link: {
            url: "https://www.google.com/maps/place/8-maktab/@37.2369906,67.2569895,17z/data=!4m14!1m8!3m7!1s0x0:0xc42e513a15d8332c!2s8-maktab!8m2!3d37.2369906!4d67.2591782!9m1!1b1!3m4!1s0x3f353175ea9305a7:0xc42e513a15d8332c!8m2!3d37.2369906!4d67.2591782",
            name: "See on goole map"
          }
        },
        {
          contactName: "Email",
          image: {
            url: "/icons/mail.png",
            alt: "mail icon"
          },
          link: {
            url: "mailto:kundalikcom01@gmail.com",
            name: "kundalikcom01@gmail.com"
          }
        }
      ]
    },
    recentPosts: {
      title: "Recent Posts",
      seeMoreLink: {
        name: "see more",
        url: "/blog"
      }
    }
  },
  blog: {
    search: {
      placeholder: "Search post...",
      image: {
        url: "/icons/search.png",
        alt: "search icon"
      }
    }
  },
  post: {
    comments: {
      title: "Comments",
      commentsForm: {
        title: "Leave a Reply",
        checkoutText: "Save my name, email in this browser for the next time I comment.",
        alerts: {
          success: "Comment submitted for review",
          fail: "All field are required with valid data"
        },
        placeholders: {
          name: "Name",
          email: "Email",
          textarea: "Comment Message...",
          button: "Post Comment"
        }
      }
    },
    relatedPosts: {
      title: "Related Posts"
    }
  }
}

export default data;