/**
 * ProjectCard Component
 * 
 * 프로젝트 정보를 카드 형태로 표시하는 컴포넌트입니다.
 * 각 프로젝트의 이름, 설명, 기술 스택, 주요 기능, 링크 등을 보여줍니다.
 * 
 * @param {Object} project - 프로젝트 정보 객체
 * @param {string} project.name - 프로젝트 이름
 * @param {string} project.description - 프로젝트 간단 설명
 * @param {string} [project.longDescription] - 프로젝트 상세 설명 (선택)
 * @param {string[]} project.tech - 사용된 기술 스택 배열
 * @param {string[]} [project.features] - 주요 기능 목록 (선택)
 * @param {string} [project.href] - 프로젝트 링크 URL (선택)
 * @param {string} [project.githubUrl] - 방문할 URL (선택)
 * @param {number} index - 카드의 인덱스 (애니메이션 딜레이 계산용)
 */

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ==================== 상수 정의 ====================

/** 애니메이션 설정 */
const ANIMATION_CONFIG = {
  duration: 0.6,
  delayMultiplier: 0.1, // 각 카드 간 딜레이 배수
  ease: [0.16, 1, 0.3, 1], // 커스텀 이징 (더 부드러운 효과)
  viewportMargin: "-50px",
  spring: { type: "spring", stiffness: 200, damping: 50 }, // 스프링 애니메이션 설정 (더 둔하게)
  tiltMax: 8, // 최대 기울기 각도 (줄임)
};

/** 스타일 클래스 상수 */
const STYLES = {
  card: "group flex flex-col h-full border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900/90 relative overflow-hidden",
  cardHeader: "space-y-3 relative z-10",
  cardTitle: "text-xl font-semibold text-white group-hover:text-rose-400 transition-colors duration-300",
  cardDescription: "text-sm text-neutral-400 leading-relaxed",
  longDescription: "text-sm text-neutral-300 leading-relaxed",
  sectionLabel: "text-xs uppercase tracking-wide text-neutral-500 mb-2",
  techBadge: "border-neutral-700 text-[11px] font-normal text-neutral-200 hover:border-rose-500/50 hover:text-rose-300 transition-all duration-300",
  featureItem: "text-xs text-neutral-400 flex items-start gap-2",
  featureBullet: "text-rose-400 mt-1",
  actionButton: "flex-1 border-neutral-700 text-neutral-200 hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-300",
  visitLink: "text-neutral-400 hover:text-rose-400 transition-all duration-300 hover:scale-110",
};

// ==================== 서브 컴포넌트 ====================

/**
 * Visit 링크 아이콘 컴포넌트 (애니메이션 포함)
 * @param {string} visitUrl - 방문할 URL
 */
const VisitLinkIcon = ({ visitUrl }) => {
  if (!visitUrl) return null;

  return (
    <motion.a
      href={visitUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={STYLES.visitLink}
      onClick={(e) => e.stopPropagation()}
      aria-label="프로젝트 방문"
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Globe className="h-5 w-5" />
    </motion.a>
  );
};

/**
 * 기술 스택 표시 컴포넌트 (애니메이션 포함)
 * @param {string[]} techStack - 기술 스택 배열
 */
const TechStack = ({ techStack }) => {
  if (!techStack || techStack.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
      variants={containerVariants}
    >
      <motion.p
        variants={badgeVariants}
        className={STYLES.sectionLabel}
      >
        Tech Stack
      </motion.p>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech, idx) => (
          <motion.div
            key={tech}
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Badge
              variant="outline"
              className={STYLES.techBadge}
            >
              {tech}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/**
 * 주요 기능 목록 컴포넌트 (애니메이션 포함)
 * @param {string[]} features - 주요 기능 배열
 */
const FeaturesList = ({ features }) => {
  if (!features || features.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
      variants={containerVariants}
    >
      <motion.p
        variants={itemVariants}
        className={STYLES.sectionLabel}
      >
        Key Features
      </motion.p>
      <ul className="space-y-1.5">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            variants={itemVariants}
            className={STYLES.featureItem}
          >
            <span className={STYLES.featureBullet}>•</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

/**
 * 프로젝트 액션 버튼 컴포넌트 (애니메이션 포함)
 * @param {string} href - 프로젝트 링크 URL
 * @param {string} githubUrl - 방문할 URL (GitHub 또는 기타)
 */
const ActionButtons = ({ href, githubUrl }) => {
  /**
   * 외부 링크를 새 탭에서 여는 헬퍼 함수
   * @param {string} url - 열 URL
   */
  const handleOpenLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const hasValidHref = href && href !== "#";
  const hasVisitUrl = !!githubUrl;

  // 버튼이 없으면 렌더링하지 않음
  if (!hasValidHref && !hasVisitUrl) return null;

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    hover: {
      scale: 1.03,
      y: -1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {hasValidHref && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            variant="outline"
            size="sm"
            className={STYLES.actionButton}
            onClick={() => handleOpenLink(href)}
            aria-label="프로젝트 방문"
          >
            <ExternalLink className="h-3.5 w-3.5 mr-2" />
            Visit Project
          </Button>
        </motion.div>
      )}
      {hasVisitUrl && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            variant="outline"
            size="sm"
            className={STYLES.actionButton}
            onClick={() => handleOpenLink(githubUrl)}
            aria-label="프로젝트 방문"
          >
            <Globe className="h-3.5 w-3.5 mr-2" />
            Visit
          </Button>
        </motion.div>
      )}
    </>
  );
};

// ==================== 메인 컴포넌트 ====================

/**
 * 프로젝트 카드 메인 컴포넌트 (고급 애니메이션 포함)
 */
function ProjectCard({ project, index }) {
  // 마우스 위치 추적을 위한 motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const translateZ = useMotionValue(0);

  // 부드러운 스프링 애니메이션 (더 둔하게)
  const springConfig = { damping: 50, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [ANIMATION_CONFIG.tiltMax, -ANIMATION_CONFIG.tiltMax]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-ANIMATION_CONFIG.tiltMax, ANIMATION_CONFIG.tiltMax]), springConfig);
  
  // translateZ를 위한 스프링 애니메이션
  const translateZSpring = useSpring(translateZ, springConfig);

  // 마우스 이벤트 핸들러
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // 마우스 위치 설정
    x.set(xPct);
    y.set(yPct);
    
    // 마우스 위치에 따라 카드가 올라오는 효과 계산
    // 마우스가 중앙에 가까울수록 더 올라옴 (최대 25px)
    const distance = Math.sqrt(xPct * xPct + yPct * yPct);
    const zValue = Math.max(0, 25 * (1 - distance * 2)); // 거리가 멀수록 0에 가까워짐
    translateZ.set(zValue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    translateZ.set(0);
  };

  // 카드 등장 애니메이션 variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration,
        delay: index * ANIMATION_CONFIG.delayMultiplier,
        ease: ANIMATION_CONFIG.ease,
      },
    },
  };

  // 내부 요소 애니메이션 variants
  const contentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
      variants={cardVariants}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateZ: translateZSpring,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card className={STYLES.card}>
          {/* 그라데이션 보더 효과 (Rose + Blue) */}
          <motion.div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(251, 113, 133, 0.15), rgba(96, 165, 250, 0.15))",
              filter: "blur(20px)",
              zIndex: 0,
            }}
            animate={{
              background: [
                "linear-gradient(135deg, rgba(251, 113, 133, 0.15), rgba(96, 165, 250, 0.15))",
                "linear-gradient(225deg, rgba(96, 165, 250, 0.15), rgba(251, 113, 133, 0.15))",
                "linear-gradient(135deg, rgba(251, 113, 133, 0.15), rgba(96, 165, 250, 0.15))",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* 카드 헤더: 프로젝트 이름과 Visit 링크 */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <CardHeader className={STYLES.cardHeader}>
              <motion.div 
                className="flex items-start justify-between gap-3"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <CardTitle className={STYLES.cardTitle}>
                    {project.name}
                  </CardTitle>
                </motion.div>
                <VisitLinkIcon visitUrl={project.githubUrl} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardDescription className={STYLES.cardDescription}>
                  {project.description}
                </CardDescription>
              </motion.div>
            </CardHeader>
          </motion.div>

          {/* 카드 본문: 상세 설명, 기술 스택, 주요 기능 */}
          <CardContent className="flex-1 space-y-4 relative z-10">
            {/* 상세 설명 (있는 경우에만 표시) */}
            {project.longDescription && (
              <motion.p
                className={STYLES.longDescription}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {project.longDescription}
              </motion.p>
            )}

            {/* 기술 스택 */}
            <TechStack techStack={project.tech} />

            {/* 주요 기능 목록 */}
            <FeaturesList features={project.features} />
          </CardContent>

          {/* 카드 푸터: 액션 버튼들 */}
          <CardFooter className="flex gap-2 pt-4 relative z-10">
            <ActionButtons href={project.href} githubUrl={project.githubUrl} />
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;

